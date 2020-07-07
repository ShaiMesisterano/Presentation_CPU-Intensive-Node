const path = require('path');
const jimp = require('jimp');

async function convertToGreyscale(file) {
	return new Promise( async (resolve, reject) => {
		try {
			if (!file.includes('.jpg')) return false;

			const image = await jimp.read(file);
			console.log(`applying greyscale to ${file}`);
			image.color([{
				apply: 'greyscale',
				params: [50]
			}])
				.write(path.join('converted', file));
			console.log(`completed ${file}`);
			resolve();
		} catch (error) {
			console.error({error});
			reject();
		}
	});
};

module.exports = convertToGreyscale;
