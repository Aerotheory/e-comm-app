## Getting Started

### First

1. Start Docker

### Second in the terminal run:

2. Docker Compose

   > _docker compose up_

3. Prisma Studio

   > _npm run db:studio_<br/> [http://localhost:5555](http://localhost:5555)

4. Development Server

   > _npm run dev_<br/> [http://localhost:3000](http://localhost:3000)<br/>[http://localhost:3000/api](http://localhost:3000/api) _(Yoda GraphQL)_

5. Stripe
   > _stripe login_ ([https://stripe.com/docs/stripe-cli](https://stripe.com/docs/stripe-cli))<br/> _stripe listen --forward-to localhost:3000/api/webhook_<br/>[localhost:3000/api/webhook](localhost:3000/api/webhook)

```bash
## Development Settup
docker compose up
npm run db:studio
npm run dev

## Generate Code From Schema:
npm run codegen

## Stripe CLI: listening to webhook
stripe listen --forward-to localhost:3000/api/webhook
https://stripe.com/docs/stripe-cli

```
