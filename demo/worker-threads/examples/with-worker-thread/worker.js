const {parentPort} = require('worker_threads');

const convertToGreyscale = require('../../convert-to-greyscale');

parentPort.on('message', async file => {
	await convertToGreyscale(file);
	parentPort.postMessage({file});
	parentPort.close();
});
