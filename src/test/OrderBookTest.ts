import {BittrexClient} from '../';
import {Config} from './Config';

const bittrex = new BittrexClient(Config.bittrex.readonly);

bittrex.orderBook('BTC-LTC', 'buy').then((orderBook) => {
	console.log(orderBook);
}, (error: any) => {
	console.log(error);
});

bittrex.orderBook('BTC-LTC', 'both').then((orderBook) => {
	console.log(orderBook);
}, (error: any) => {
	console.log(error);
});