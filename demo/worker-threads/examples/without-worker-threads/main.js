const path = require('path');
const fs = require('fs');

const convertToGreyscale = require('../../convert-to-greyscale');

const imagesFolder = path.join('..', 'images');
const files = fs.readdirSync(imagesFolder);

for (let file of files) {
	convertToGreyscale(path.join(imagesFolder, file));
}