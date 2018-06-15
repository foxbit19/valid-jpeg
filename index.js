const fs = require('fs');
var imagePath;

var checkValidityPromise = new Promise((resolve, reject) => {
    if (!imagePath) {
        throw new Error("This is not a valid image path");
    }

    var valid = false;

    var stat = fs.lstatSync(imagePath);

    if (stat.isFile()) {
        // check if is a valid jpg/jpeg image
        const readable = fs.createReadStream(imagePath, { start: 0, end: 3 });

        readable.on('data', (chunk) => {
            // check if it's a valid jpeg image using its magic number
            if (chunk && chunk.toString("hex", 0, 2) === "ffd8") {
                // valid jpeg image
                valid = true;
            }
            // otherwise this is not a valid jpeg image
        });

        readable.on('end', () => {
            resolve(valid);
        });
    }
});


/**
 * 
 */
exports.isValid = (path) => {
    imagePath = path;
    checkValidityPromise.then(function (valid) {
        if (valid) {
            console.log('Whooo the image is valid!')
        }
        else {
            console.error('Oh no, something went wrong :(')
        }
    });
}
