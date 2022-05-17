import { Client } from 'faunadb';

export const fauna = new Client({
  secret: process.env.FAUNADB_SECRET as string,
  domain: process.env.FAUNADB_DOMAIN,
});
