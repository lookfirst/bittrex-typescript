# bittrex-typescript client

[![Greenkeeper badge](https://badges.greenkeeper.io/lookfirst/bittrex-typescript.svg)](https://greenkeeper.io/)

[![npm version](https://badge.fury.io/js/bittrex-typescript.svg)](https://badge.fury.io/js/bittrex-typescript)
[![Dependency Status](https://david-dm.org/boennemann/badges.svg)](https://david-dm.org/boennemann/badges)
[![Build Status](https://travis-ci.org/lookfirst/bittrex-typescript.svg?branch=master)](https://travis-ci.org/lookfirst/bittrex-typescript)

## About

I looked at all of the bittrex API clients that I could find. None of them supported HTTP KeepAlive. None of them did TypeScript generics well. All of them needed help. So, what else do you do? Write your own.

I'm open to a PR for removing the Node dependencies and making this work in a browser. This will likely require replacing `got` as the HTTP client. Maybe something with the Fetch API?

I'd like to take the good parts from `agentkeepalive` and just use them to see if there is any real performance benefits.

Todo: Implement the [websockets portion of the API](https://github.com/n0mad01/node.bittrex.api/issues/44#issuecomment-323082393).

## Usage

```
yarn add bittrex-typescript
```

```
import {BittrexClient} from 'bittrex-typescript';

const bittrex = new BittrexClient({
    key: '',
    secret: ''
    agent: true // Turn on HTTP KeepAlive
});

bittrex.ticker('BTC-NEO').then((ticker) => {
	console.log(ticker);
}, (error) => {
	console.log(error);
});

```

Donate BTC: 18zrUSJzvtxDmaGaThAZuR1GPMe2jwjmxW
