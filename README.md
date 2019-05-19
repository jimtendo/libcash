# LibCash

[![NPM Package](https://img.shields.io/npm/v/bitcore-lib-cash.svg?style=flat-square)](https://www.npmjs.org/package/bitcore-lib-cash)
[![Build Status](https://img.shields.io/travis/bitpay/bitcore-lib-cash.svg?branch=master&style=flat-square)](https://travis-ci.org/bitpay/bitcore-lib-cash)
[![Coverage Status](https://coveralls.io/repos/github/bitpay/bitcore-lib-cash/badge.svg)](https://coveralls.io/github/bitpay/bitcore-lib-cash)

**A pure and powerful JavaScript Bitcoin Cash (BCH) library.**

LibCash is a fork of bitcore-lib-bitcoincash aimed at providing more up-to-date support for Bitcoin Cash.

## Principles

Bitcoin Cash is an other powerful peer-to-peer platform for the next generation of financial technology. The decentralized nature of the Bitcoin network allows for highly resilient bitcoin infrastructure, and the developer community needs reliable, open-source tools to implement bitcoin apps and services.

## Bitcoin Cash changes

Bitcoin cash uses a different `sighash` for transaction signatures. The implementation in LibCash has been tested agains the original bitcoin-cash test vectors (see sighash.json in `/test`). `bitcoin-cash` modifications in script evaluation has not been implemented yet.

## Get Started

```sh
npm install bitcore-lib-cash
```

Adding LibCash to your app's `package.json`:

```json
"dependencies": {
    "libcash": "=0.18.0",
    ...
}
```

## Documentation

The complete docs are hosted here: [bitcore documentation](https://github.com/bitpay/bitcore). There's also a [bitcore API reference](https://github.com/bitpay/bitcore/blob/master/packages/bitcore-node/docs/api-documentation.md) available generated from the JSDocs of the project, where you'll find low-level details on each bitcore utility.

## Examples

- [Generate a random address](https://github.com/bitpay/bitcore-lib-cash/blob/master/docs/examples.md#generate-a-random-address)
- [Generate a address from a SHA256 hash](https://github.com/bitpay/bitcore-lib-cash/blob/master/docs/examples.md#generate-a-address-from-a-sha256-hash)
- [Import an address via WIF](https://github.com/bitpay/bitcore-lib-cash/blob/master/docs/examples.md#import-an-address-via-wif)
- [Create a Transaction](https://github.com/bitpay/bitcore-lib-cash/blob/master/docs/examples.md#create-a-transaction)
- [Sign a Bitcoin message](https://github.com/bitpay/bitcore-lib-cash/blob/master/docs/examples.md#sign-a-bitcoin-message)
- [Verify a Bitcoin message](https://github.com/bitpay/bitcore-lib-cash/blob/master/docs/examples.md#verify-a-bitcoin-message)
- [Create an OP RETURN transaction](https://github.com/bitpay/bitcore-lib-cash/blob/master/docs/examples.md#create-an-op-return-transaction)
- [Create a 2-of-3 multisig P2SH address](https://github.com/bitpay/bitcore-lib-cash/blob/master/docs/examples.md#create-a-2-of-3-multisig-p2sh-address)
- [Spend from a 2-of-2 multisig P2SH address](https://github.com/bitpay/bitcore-lib-cash/blob/master/docs/examples.md#spend-from-a-2-of-2-multisig-p2sh-address)

## Building the Browser Bundle

To build a bitcore-lib full bundle for the browser:

```sh
gulp browser
```

This will generate files named `bitcore-lib-cash.js` and `bitcore-lib-cash.min.js`.

You can also use our pre-generated files, provided for each release along with a PGP signature by one of the project's maintainers. To get them, checkout the [releases](https://github.com/bitpay/bitcore/blob/master/packages/bitcore-lib-cash/CHANGELOG.md).

## Development & Tests

```sh
git clone https://github.com/bitpay/bitcore-lib-cash
cd bitcore-lib
npm install
```

Run all the tests:

```sh
gulp test
```

You can also run just the Node.js tests with `gulp test:node`, just the browser tests with `gulp test:browser`
or create a test coverage report (you can open `coverage/lcov-report/index.html` to visualize it) with `gulp coverage`.

## Security

We're using Bitcore in production, as are many others, but please use common sense when doing anything related to finances! We take no responsibility for your implementation decisions.

If you find a security issue, please email security@bitpay.com.

## Contributing

See [CONTRIBUTING.md](https://github.com/bitpay/bitcore/blob/master/Contributing.md) on the main bitcore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/bitpay/bitcore/blob/master/LICENSE).

Copyright 2013-2019 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.
