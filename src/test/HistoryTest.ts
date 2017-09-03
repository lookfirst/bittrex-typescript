import {BittrexClient} from '../';
import {Config} from './Config';

const bittrex = new BittrexClient(Config.bittrex.readonly);

bittrex.withdrawalHistory().then((histories) => {
	console.log(histories);
}, (error) => {
	console.log(error);
});

bittrex.withdrawalHistory('BTC').then((histories) => {
	console.log(histories);
}, (error) => {
	console.log(error);
});

bittrex.depositHistory().then((histories) => {
	console.log(histories);
}, (error) => {
	console.log(error);
});

bittrex.depositHistory('BTC').then((histories) => {
	console.log(histories);
}, (error) => {
	console.log(error);
});
