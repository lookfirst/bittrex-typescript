import {BittrexClient} from '../';
import {Config} from './Config';

const bittrex = new BittrexClient(Config.bittrex.readonly);

bittrex.marketHistory('BTC-NEO').then((histories) => {
	console.log(histories);
}, (error) => {
	console.log(error);
});
