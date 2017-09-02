import {BittrexClient} from '../';
import {Config} from './Config';

const bittrex = new BittrexClient(Config.bittrex.readonly);

let start = Date.now();
bittrex.orderHistory().then((orderHistory) => {
	console.log(orderHistory);
	console.log(`${Date.now() - start}ms`);
}, (error: any) => {
	console.log(error);
});

// start = Date.now();
// bittrex.orderHistory('BTC-NEO').then((orderHistory) => {
// 	console.log(orderHistory);
// 	console.log(`${Date.now() - start}ms`);
// }, (error: any) => {
// 	console.log(error);
// });
