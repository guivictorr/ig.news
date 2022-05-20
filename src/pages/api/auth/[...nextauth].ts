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
    async session({ session }) {
      if (!session.user || !session.user.email) {
        return session;
      }

      try {
        const activeSubscription = await fauna.query(
          q.Get(
            q.Intersection(
              q.Match(
                q.Index('subscription_by_user_ref'),
                q.Select(
                  'ref',
                  q.Get(
                    q.Match(
                      q.Index('user_by_email'),
                      q.Casefold(session.user.email),
                    ),
                  ),
                ),
              ),
              q.Match(q.Index('subscription_by_status'), 'active'),
            ),
          ),
        );

        return {
          ...session,
          activeSubscription,
        };
      } catch {
        return {
          ...session,
          activeSubscription: null,
        };
      }
    },
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
