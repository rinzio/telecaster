import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import Auth_ from './app/lib/http/auth';

import { object, string } from 'zod';
import { HTTP } from './app/lib/http/axios';

export const signInSchema = object({
  email: string({ required_error: 'Email is required' })
    .min(1, 'Email is required')
    .email('Invalid email'),
  password: string({ required_error: 'Password is required' })
    .min(1, 'Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
});

export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    async redirect({ baseUrl }: { baseUrl: string }) {
      return `${baseUrl}/dashboard`;
    },
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.token;
        token.user = user;
      }
      return token;
    },
  },
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;
        const { email, password } = await signInSchema.parseAsync(credentials);
        const token = (await Auth_.LOGIN({ email, password })).access_token;
        HTTP.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        user = await Auth_.ME();
        if (!user) {
          throw new Error('User not found.');
        }
        return { ...user, token };
      },
    }),
  ],
});
