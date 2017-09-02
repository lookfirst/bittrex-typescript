import {BittrexClient} from '../';
import {Config} from './Config';

const bittrex = new BittrexClient(Config.bittrex.readonly);

bittrex.balances().then((balances) => {
	console.log(balances);
}, (error) => {
	console.log(error);
});

bittrex.balance('BTC').then((balance) => {
	console.log(balance);
}, (error) => {
	console.log(error);
});
