import {authSchema} from '@/auth/schema';
import PAGES from '@/shared/config/pages.config';
import usersData from '@/shared/data/users.data';
import locales from '@/shared/locales';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const {handlers, signIn, signOut, auth} = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },

      authorize: async credentials => {
        const {email, password} = await authSchema.parseAsync(credentials);

        const user = usersData.find(user => user.email === email && user.password === password);

        if (!user) {
          throw new Error(locales.errors.auth.invalidCredentials);
        }

        return user;
      },
    }),
  ],

  callbacks: {
    authorized: async ({auth}) => {
      return !!auth;
    },
    session: async ({session}) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: usersData.find(user => user.email === session.user.email)?.id,
        },
      };
    },
  },

  pages: {
    signIn: PAGES.login,
  },

  trustHost: true,
});
