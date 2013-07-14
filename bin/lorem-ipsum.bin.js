#!/usr/bin/env node

var optimist   = require('optimist')
  , generator  = require('./../lib/generator')
  , clipper    = require('./../lib/clipper');

var options    = {}
  , arguments  = optimist.argv
  , loremIpsum = '';

// Allow CLI user to run command with plain english. E.g. "lorem-ipsum 1 sentence" or "lorem-ipsum 3 words --copy"
var nakedArguments = arguments._;
if (nakedArguments.length >= 2) {
  arguments.count = nakedArguments[0]; // Clobber count.
  arguments.units = nakedArguments[1]; // Clobber units.
}

options.units  = arguments.units || 'sentences';
options.count  = arguments.count || 1;
options.copy   = arguments.copy ? true : false;
options.format = arguments.format || 'plain'; 

// Generate the lorem ipsum text and print it out.
loremIpsum = generator(options);
console.log(loremIpsum);

// Copy the lorem ipsum text to the clipboard.
if (options.copy) {
  clipper(loremIpsum, function(err) { err ? process.exit(1) : process.exit() });
} else {
  process.exit(); // Successful exit.
}