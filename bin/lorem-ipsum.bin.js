#!/usr/bin/env node

var g = require('./../lib/generator')
  , options = { count: 5, units: 'sentences' }
  , copy = false
  , args = process.argv.slice(2);
  
for (var i = 0; i < args.length; i++) {
  if (args[i].indexOf('-') < 0) {
    options.count = args[i];
  } else {
    switch (args[i]) {
      case "--words":
      case "--word":
      case "-w":
        options.units = "words";
        break;
      case "--sentences":
      case "--sentence":
      case "-s":
        options.units = "sentences";
        break;
      case "--paragraphs":
      case "--paragraph":
      case "-p":
        options.units = "paragraphs";
        break;
      case "--copy":
      case "-cp":
        copy = true;
        break;
    }
  }
}

value = g(options);

console.log(value);

if (copy) {
  var exec = require('child_process').exec;
  var stat = '';
  
  switch(process.platform) {
    case 'darwin':
      stat = 'echo "' + value + '" | pbcopy';
      break;
    case 'win32':
      stat = 'echo "' + value + '" | clip';
      break;
    case 'linux':
      stat = 'echo "' + value + '" | xclip -selection clipboard';
      break;
  }
  
  exec(stat, function(err, stdout, stderr) {
    if (err) {
      console.log('FAILED TO COPY DATA TO CLIPBOARD!');
    }
  });
}