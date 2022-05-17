import NextAuth from 'next-auth';
import { query } from 'faunadb';
import GithubProvider from 'next-auth/providers/github';
import { fauna } from 'services/fauna';

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user }) {
      try {
        await fauna.query(
          query.Create(query.Collection('users'), {
            data: { email: user.email },
          }),
        );
        return true;
      } catch (error) {
        return false;
      }
    },
  },
});
