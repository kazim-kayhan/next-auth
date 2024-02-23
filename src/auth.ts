import authConfig from '@/auth.config'
import { prisma } from '@/lib/db'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { Role } from '@prisma/client'
import 'next-auth'
import NextAuth, { type DefaultSession } from 'next-auth'
import { getUserById } from './data/user'

export type ExtendedUser = DefaultSession['user'] & {
  role: Role
  isTwoFactorEnabled: boolean
  isOAuth: boolean
}

// Declare your framework library
declare module 'next-auth' {
  /**
   * Returned by `useSession`, `auth`, contains information about the active session.
   */
  // eslint-disable-next-line no-unused-vars
  interface Session {
    user: ExtendedUser
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut
} = NextAuth({
  pages: {
    signIn: '/auth/login',
    error: '/auth/error'
  },
  events: {
    async linkAccount ({ user }) {
      await prisma.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() }
      })
    }
  },
  callbacks: {
    async signIn ({ user, account }) {
      console.log('🚀 ~ signIn ~ user:', user)
      // Allow OAuth accounts to sign in without email verification
      if (account?.provider !== 'credentials') return true

      if (!user) return false

      const existingUser = await getUserById(user.id!)
      if (!existingUser?.emailVerified) return false

      // TODO: Add two-factor authentication check here
      return true
    },
    async session ({ token, session }:any) {
      if (token.sub && session.user) {
        session.user.id = token.sub
      }

      if (token.role && session.user) {
        session.user.role = token.role
      }
      console.log('🚀 ~ session ~ token:', token)
      // Send properties to the client, like an access_token from a provider.
      return session
    },
    async jwt ({ token, user, account, profile }) {
      if (!token.sub) return token
      const existingUser = await getUserById(token.sub)
      if (!existingUser) return token
      token.role = existingUser.role
      return token
    }
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: 'jwt' },
  ...authConfig
})
