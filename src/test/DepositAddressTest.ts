import {BittrexClient} from '../';
import {Config} from './Config';

const bittrex = new BittrexClient(Config.bittrex.readonly);

bittrex.depositAddress('BTC', {log: true, retries: 5}).then((address) => {
	console.log(address);
}, (error) => {
	console.log(error);
});

bittrex.depositAddress('alsdkjf', {log: true, retries: 2}).then((address) => {
	console.log(address);
}, (error) => {
	console.log(error);
});
