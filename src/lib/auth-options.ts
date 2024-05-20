import axios from "axios";
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
    async signIn({ user, account, profile, email, credentials }) {
      const isAllowedToSignIn = await isEmailExist(user.email);
      if (!isAllowedToSignIn) {
        await axios.post("https://strapi.joondev.com/api/auth/local/register", {
          username: user.id,
          email: user.email,
          password: "social",
          nickname: user.name,
        });
        return true;
      } else {
        return "/";
      }
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export const isEmailExist = async (email: any) => {
  try {
    const response = await axios.get(
      `https://strapi.joondev.com/api/users?filters[$and][0][email][$eq]=${email}&fields=email`,
      {
        headers: {
          Authorization: `Bearer ${process.env.API_TOKEN_FOR_DATA_STRAPI}`,
        },
      },
    );

    const emails: { email: string }[] = response.data;
    const result = emails.length > 0;
    return result;
  } catch (error) {
    console.error(error);
    return false;
  }
};
