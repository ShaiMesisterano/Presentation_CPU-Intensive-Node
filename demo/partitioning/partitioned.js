function asyncAvg(n, avgCB) {
	let sum = 0;

	function help(i, cb) {
		sum += i;
		if (i === n) {
			cb(sum);
			return;
		}

		setImmediate(help.bind(null, i + 1, cb));
	}

	help(1, function (sum) {
		const avg = sum / n;
		avgCB(avg);
	});
}

// execution
const n = 3;
asyncAvg(n, function (avg) {
	console.log('avg of 1-n: ' + avg);
});
