import dbconnect from "@/lib/dbconnect";
import UserModel from "@/models/User";
import NextAuth, { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
callbacks: {
    async signIn({user, account, }){
        
        await dbconnect();

        const existingUser = await UserModel.findOne({email: user.email});
        if(!existingUser){
            await UserModel.create({
                email: user.email,
                name: user.name,
                provider: account?.provider
            });
        }
        return true;
    },
     async jwt({ token, user }: any) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
      }
      return token;
    },

    async session({ session, token }: any) {
      if (session.user) {
        session.user.id = token.id;
        session.user.username = token.username;
      }
      return session;
    },
},
session: {strategy: "jwt"},
pages: {
    signIn: "/login", // this indicates we will use our own signin page 
  },

  secret: process.env.NEXTAUTH_SECRET,



 
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };