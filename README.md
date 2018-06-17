# valid-jpeg

![build status](https://api.travis-ci.org/foxbit19/valid-jpeg.svg?branch=master)

Very simple node.js package to check if a jpeg image is valid

## Installation

```shell
$ npm install valid-jpeg
```

## Usage

```js
// load the module
const imageValid = require('valid-jpeg');

...

// check if image.jpg is a valid jpeg image
imageValid.isValid('image.jpg', (err, valid) => {
    // check if error occurs
    if(err) 
        console.error('Oh no! Something went wrong!');

    // valid is true if image is a valid jpeg, false otherwise
    if(valid)  
        console.info('Valid jpeg!');
    else
        console.error('Not a valid jpeg');
});
```

## Are you kidding? A simple jpeg checker?

A simple, plug-and-play module to check if a jpeg image is valid does not exist.

This module extracts the first 2 bytes of a file and checks if they are in equals to `ffd8` (the magic number used by jpeg image).

*That's it!* :)