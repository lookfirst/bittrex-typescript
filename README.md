# bittrex-typescript client

## Usage

```
yarn add bittrex-typescript
```

```
import {BittrexClient, Ticker} from 'bittrex-typescript';

const bittrex: Bittrex = new Bittrex({
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