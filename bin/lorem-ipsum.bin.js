#!/usr/bin/env node

var optimist   = require('optimist')
  , generator  = require('./../lib/generator')
  , clipper    = require('./../lib/clipper');

var options    = {}
  , arguments  = optimist.argv
  , loremIpsum = '';

options.units = arguments.units || 'words';
options.count = arguments.count || 5;
options.copy  = arguments.copy ? true : false;

// Generate the lorem ipsum text and print it out.
loremIpsum = generator(options);
console.log(loremIpsum);

// Copy the lorem ipsum text to the clipboard.
if (options.copy) {
  clipper(loremIpsum, function(err) { err ? process.exit(1) : process.exit() });
} else {
  process.exit(); // Successful exit.
}
