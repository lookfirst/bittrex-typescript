# bittrex-typescript client

## About

I looked at all of the bittrex API clients that I could find. None of them supported HTTP KeepAlive. None of them did TypeScript generics well. All of them needed help. So, what else do you do? Write your own.

I'm open to a PR for removing the Node dependencies and making this work in a browser. This will likely require replacing `got` as the HTTP client. Maybe something with the Fetch API?

I'd like to take the good parts from `agentkeepalive` and just use them to see if there is any real performance benefits.

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

Donate: 18zrUSJzvtxDmaGaThAZuR1GPMe2jwjmxW
