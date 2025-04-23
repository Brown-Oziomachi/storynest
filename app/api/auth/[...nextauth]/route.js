
import { handlers } from "@/auth"
export const { GET, POST } = handlers

import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
 
export const { signIn, signOut, auth } = NextAuth({
    providers: [GitHub],
    providers: [Google],
})