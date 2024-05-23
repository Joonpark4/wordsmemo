import axios from "axios";
import { StrapiLoginResponseT } from "@/types/strapi/user";
import { StrapiErrorT } from "@/types/strapi/strapiError";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, trigger, account, user, session }) {
      if (account) {
        if (account.provider === 'google') {
          // we now know we are doing a sign in using GoogleProvider
          try {
            const strapiResponse = await fetch(
              `${process.env.STRAPI_BACKEND_URL}/api/auth/${account.provider}/callback?access_token=${account.access_token}`,
              { cache: 'no-cache' }
            );
            if (!strapiResponse.ok) {
              const strapiError: StrapiErrorT = await strapiResponse.json();
              throw new Error(strapiError.error.message);
            }
            const strapiLoginResponse: StrapiLoginResponseT =
              await strapiResponse.json();
            // customize token
            // name and email will already be on here
            token.strapiToken = strapiLoginResponse.jwt;
            token.strapiUserId = strapiLoginResponse.user.id;
            token.provider = account.provider;
            token.blocked = strapiLoginResponse.user.blocked;
    
          } catch (error) {
            throw error;
          }
        }
      }
    
      return token;
    },
    async session({ token, session }) {
      session.strapiToken = token.strapiToken;
      session.provider = token.provider;
      session.user.strapiUserId = token.strapiUserId;
      session.user.blocked = token.blocked;
      session.nickname = token.name;
      return session;
    },
    // async signIn({ user, account, profile, email, credentials }) {
    //   if (!user.email) {
    //     console.error("User email is undefined");
    //     return false;
    //   }
    //   const isAllowedToSignIn = true;
    //   if (isAllowedToSignIn) {
    //     if (!(await isEmailExist(user.email))) {
    //       await createUser(user);
    //     }
    //     return true;
    //   } else {
    //     return "/";
    //   }
    // },
  },
};

export const isEmailExist = async (
  email: string | null | undefined,
): Promise<boolean> => {
  const response = await axios.get(
    `${process.env.STRAPI_BACKEND_URL}/api/users?filters[$and][0][email][$eq]=${email}&fields=email`,
    {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN_FOR_DATA_STRAPI}`,
      },
    },
  );

  const emails: { email: string }[] = response.data;
  return emails.length > 0;
};

export const createUser = async (user: any) => {
  try {
    await axios.post(
      `${process.env.STRAPI_BACKEND_URL}/api/auth/local/register`,
      {
        username: user.name,
        email: user.email,
        password: "social",
        nickname: user.name,
      },
    );
    return true;
  } catch (error) {
    console.error("Error creating user:", error);
    return false;
  }
};
