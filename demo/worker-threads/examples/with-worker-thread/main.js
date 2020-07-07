const path = require('path');
const fs = require('fs');

const runWorker = require('./run-worker');

const imagesFolder = path.join('..', 'images');
const files = fs.readdirSync(imagesFolder);

for (let file of files) {
	const worker = runWorker(path.join(__dirname, 'worker.js'), (err) => {
		if (err) console.error(err);
	});
	worker.postMessage(path.join('..', 'images', file));
};
