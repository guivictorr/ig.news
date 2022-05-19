<h1 align='center'>ig.news</h1>
<p align='center'>Project made during @Rocketseat ignite bootcamp to practice next.js concepts, integration with stripe payment, prismic cms and faunadb</p>

## 🛠 Technologies

This project was developed with the following technologies:

Frontend

- [ReactJS](https://pt-br.reactjs.org)
- [Next.js](https://nextjs.org)
- [Typescript](typescriptlang.org/)
- [Stripe](https://stripe.com/br)
- [Sass](https://sass-lang.com/)

Backend

- [FaunaDB](https://fauna.com/)
- [Stripe](https://stripe.com/br)

## 📱💻 Instructions

```
## 1. Clone repo
git clone https://github.com/guivictorr/ig.news.git

## 2. Change to project folder
cd ig.news

## 3. Configure .env.local variables

## 4. Create FaunaDB collections and indexes
Collections
users
subscriptions

Indexes
user_by_email - data.email
user_by_stripe_customer_id - data.stripe_customer_id

## 5. Install dependencies
yarn

## 6. Run the app
yarn start
```

## 🤔 How to contribute

- Fork this repository;
- Create a branch with your feature: `git checkout -b my-feature`;
- Commit your changes: `git commit -m 'feat: My new feature'`;
- Push to your branch: `git push origin my-feature`.

Once your pull request has been merged, you can delete your branch.
