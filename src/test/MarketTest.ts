import {BittrexClient} from '../';
import {Config} from './Config';

const bittrex = new BittrexClient(Config.bittrex.readonly);

bittrex.markets().then((markets) => {
	console.log(markets);
}, (error) => {
	console.log(error);
});
