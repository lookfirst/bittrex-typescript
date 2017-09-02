# bittrex-typescript client

## About

I looked at all of the bittrex API clients that I could find. None of them supported HTTP KeepAlive. None of them did TypeScript generics well. All of them needed help. So, what else do you do? Write your own.

## Usage

```
yarn add bittrex-typescript
```

```
import {Bittrex, BittrexClient, Ticker} from 'bittrex-typescript';

const bittrex: Bittrex = new BittrexClient({
    key: '',
    secret: ''
    agent: true
});

bittrex.ticker('BTC-NEO').then((ticker: Ticker) => {
	console.log(ticker);
}, (error) => {
	console.log(error);
});

```

Donate: 18zrUSJzvtxDmaGaThAZuR1GPMe2jwjmxW
