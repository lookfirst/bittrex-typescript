import {BittrexClient} from '../';
import {Config} from './Config';

const bittrex = new BittrexClient(Config.bittrex.readonly);

bittrex.currencies().then((currencies) => {
	console.log(currencies);
}, (error) => {
	console.log(error);
});
