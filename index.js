const fs = require('fs');

function checkValidity(imagePath, callback) {
    var valid = false;
    var error;
    var stat;

    if (!imagePath) {
        error = new Error("This is not a valid image path");
        return;
    }

    stat = fs.lstatSync(imagePath);

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
            callback(error, valid);
        });
    }
}

exports.isValid = checkValidity;