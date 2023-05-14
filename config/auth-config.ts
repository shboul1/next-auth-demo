import GoogleProvider from "next-auth/providers/google";
import type { NextAuthOptions } from "next-auth";
export const authOptions: NextAuthOptions = {
  secret: process.env.SECRET_KEY!,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/sign-in",
  },
};
