var assert = require('assert');
var imageValid = require('../../');

describe('valid-jpeg', function () {
    it('should set 2nd callback args to true when the image is a valid jpeg image', function () {
        imageValid.isValid('valid.jpg', (err, valid) => {
            assert(valid, true);
        });
    });

    it('should set 2nd callback args to false when the image is a valid jpeg image', function () {
        imageValid.isValid('not_valid.jpg', (err, valid) => {
            assert(valid, true);
        });
    });
});