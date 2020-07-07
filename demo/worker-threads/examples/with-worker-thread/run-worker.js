const {Worker} = require('worker_threads');

function runWorker(path, cb, workerData) {
	const worker = new Worker(path, {workerData});

	worker.on('message', msg => {
		cb(null, msg);
	});

	worker.on('error', cb);

	worker.on('exit', (exitCode) => {
		if (exitCode === 0) return null;

		return cb(new Error(`Worker has stopped with code ${exitCode}`));
	});
	return worker;
}

module.exports = runWorker;
