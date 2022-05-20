import NextAuth from 'next-auth';
import { query as q } from 'faunadb';
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
      if (!user.email) {
        return false;
      }

      try {
        await fauna.query(
          q.If(
            q.Not(
              q.Exists(
                q.Match(q.Index('user_by_email'), q.Casefold(user.email)),
              ),
            ),
            q.Create(q.Collection('users'), {
              data: { email: user.email },
            }),
            q.Get(q.Match(q.Index('user_by_email'), q.Casefold(user.email))),
          ),
        );
        return true;
      } catch (error) {
        return false;
      }
    },
  },
});
