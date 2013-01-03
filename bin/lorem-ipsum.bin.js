#!/usr/bin/env node

/**
 * Module dependencies.
 */
var execute    = require('child_process').exec
  , optimist   = require('optimist')
  , generator  = require('./../lib/generator');

var options    = {}
  , arguments  = optimist.argv
  , loremIpsum = ''
  , statement  = '';

options.units = arguments.units || 'words';
options.count = arguments.count || 5;
options.copy  = arguments.copy ? true : false;

// Generate the lorem ipsum text and print it out.
loremIpsum = generator(options);
console.log(loremIpsum);

if (!options.copy) process.exit();

// Copy the lorem ipsum text to the clipboard.
statement = 'echo "' + loremIpsum + '" | ';
switch (process.platform) {
  case 'darwin':
    statement = statement + 'pbcopy';
    break;
  case 'win32':
    statement = statement + 'clip';
    break;
  case 'linux':
  default:
    statement = statement + 'xclip -selection clipboard';
}

execute(statement, function(err, stdout, stderr) {
  if (err) {
    console.log('FAILED TO COPY DATA TO CLIPBOARD');
    process.exit(1);
  }
  process.exit();
});