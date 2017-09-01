import {BittrexClient} from '../Bittrex';
import {Ticker} from '../Ticker';
import {Config} from './Config';

const bittrex = new BittrexClient(Config.bittrex.readonly);

bittrex.ticker('BTC-NEO').then((ticker: Ticker) => {
	console.log(ticker);
}, (error) => {
	console.log(error);
});
