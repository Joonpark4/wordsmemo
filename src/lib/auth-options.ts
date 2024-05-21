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
      // 다음 if문을 try-catch로 감싸서 에러를 잡아주세요.
      if (!user.email) {
        console.error("User email is undefined");
        return false;
      }
      const isAllowedToSignIn = true;
      if (isAllowedToSignIn) {
        if (!(await isEmailExist(user.email))) {
          await createUser(user);
        }
        return true;
      } else {
        return "/";
      }
    },
  },
};

export const isEmailExist = async (
  email: string | null | undefined,
): Promise<boolean> => {
  const response = await axios.get(
    `https://strapi.joondev.com/api/users?filters[$and][0][email][$eq]=${email}&fields=email`,
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
    await axios.post("https://strapi.joondev.com/api/auth/local/register", {
      username: user.name,
      email: user.email,
      password: "social",
      nickname: user.name,
    });
    return true;
  } catch (error) {
    console.error("Error creating user:", error);
    return false;
  }
};
