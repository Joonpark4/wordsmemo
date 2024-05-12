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
  callbacks:{
    async signIn({user,account,profile,email,credentials}){
      const isAllowedToSignIn = true;
      if(isAllowedToSignIn){
        


        return true;
      } else{
        return false;
      }
  }
},
  secret: process.env.NEXTAUTH_SECRET,
};

export const isEmailExist = (email: string, data:any[]) => {
  return data.some((item) => item.email === email);
};

export const CreateUser = (email:string) =>{
  
}