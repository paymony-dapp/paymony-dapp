# Paymony Dapp

## _Automated payments powered by the blockchain._

Paymony is platform that lets people make trustless automated payments

## Features

- Subscribing to listed web3 wallets
- Creating custom subscription to web3 wallets
- Creating plans others can subscribe to

## Tech

Dillinger uses a number of open source projects to work properly:

- [Nextjs](https://nextjs.org/) - For awesome fullstack app!
- [Oak JS Time Trigger SDK](https://docs.oak.tech/docs/automation-time-js-sdk/) - Javascript SDK to setup automation task on the OAK blockchain
- [Talisman wallet sdk](https://talisman.xyz/) - Connects Polkadot compatible wallets.
- [Polkadot.js API](https://polkadot.js.org/docs/) - API for interacting with the Polkadot ecosystem
- [TRPC](https://trpc.io/) - Typed support for APIs
- [Prisma](https://www.prisma.io/) - Pragmatic database ORM with type support
- [Jest](https://jestjs.io/) - testing for Node.js applications

## Installation

```sh
git clone https://github.com/paymony-dapp/paymony-dapp.git
cd paymony-dapp
yarn install
yarn dev
```

## Development

```sh
yarn dev
```

## Testing

```sh
yarn test
```

#### Build

For production release:

```sh
yarn build
```

## License

MIT
