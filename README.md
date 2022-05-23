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

## 4. Create FaunaDB collections and indexes (see bellow)

## 5. Use stripe cli to listen webhooks on localhost
stripe listen --forward-to http://localhost:3000/api/webhooks

## 6. Install dependencies
yarn

## 7. Run the app
yarn start
```

### Faunadb

To work with this project you need to configure faunadb with these collections and indexes. 

*Collections*
users
subscriptions

*Indexes* (name / term)
user_by_email - data.email
user_by_stripe_customer_id - data.stripe_customer_id
subscription_by_user_ref - data.userId
subscription_by_status - data.status
subscription_by_id - data.id


## 🤔 How to contribute

- Fork this repository;
- Create a branch with your feature: `git checkout -b my-feature`;
- Commit your changes: `git commit -m 'feat: My new feature'`;
- Push to your branch: `git push origin my-feature`.

Once your pull request has been merged, you can delete your branch.
