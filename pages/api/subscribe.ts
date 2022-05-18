import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { stripe } from 'services/stripe';

const subscribe = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
    return;
  }

  const session = await getSession({ req });

  if (!session || !session.user?.email) {
    res.status(401).json({
      message: 'You need to be logged in to subscribe',
    });
    return;
  }

  const stripeCustomer = await stripe.customers.create({
    email: session.user.email,
  });

  const stripeCheckoutSession = await stripe.checkout.sessions.create({
    customer: stripeCustomer.id,
    payment_method_types: ['card'],
    billing_address_collection: 'required',
    line_items: [
      {
        price: 'price_1KzYeREcbM5W9LXWqUGq86tP',
        quantity: 1,
      },
    ],
    mode: 'subscription',
    allow_promotion_codes: true,
    success_url: `${process.env.APP_URL}/posts`,
    cancel_url: `${process.env.APP_URL}`,
  });

  return res.status(200).json({ sessionId: stripeCheckoutSession.id });
};

export default subscribe;
