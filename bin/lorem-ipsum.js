#!/usr/bin/env node

var g = require('./../lib/generator')
  , options = { count: 5, units: 'sentences' }
  , args = process.argv.slice(2);
  
for (var i = 0; i < args.length; i++) {
  if (i == 0) {
    options.count = args[i];
  } else {
    switch (args[i]) {
      case "--words":
        options.units = "words";
        break;
      case "--sentences":
      case "--sentence":
        options.units = "sentences";
        break;
    }
  }
}

return console.log(g(options));