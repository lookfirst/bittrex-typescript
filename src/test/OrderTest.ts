import {BittrexClient} from '../';
import {Config} from './Config';

const bittrex = new BittrexClient(Config.bittrex.readonly);

let start = Date.now();
bittrex.orders().then((orders) => {
	console.log(orders);
	console.log(`${Date.now() - start}ms`);
}, (error: any) => {
	console.log(error);
});

start = Date.now();
bittrex.openOrders('BTC-NEO').then((orders) => {
	console.log(orders);
	console.log(`${Date.now() - start}ms`);
}, (error: any) => {
	console.log(error);
});
