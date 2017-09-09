import {BittrexClient} from '../';
import {Config} from './Config';

const bittrex = new BittrexClient(Config.bittrex.readonly);

bittrex.marketSummaries().then((summaries) => {
	console.log(summaries);

	bittrex.marketSummary('BTC-NEO').then((summary) => {
		console.log(summary);
		console.log(summary.invert());
	});
});
