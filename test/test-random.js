/*
 * Series of unit tests to test randomness of output.
 */
var assert = require('assert');
var generator = require('../lib/generator');
var random = Math.random;

/*
 * Helpers
 */
function generateWords(random) {
  var generator = require('./../lib/generator');
  var words = [];

  for (var i = 0; i < 100; i++) {
    words.push(generator({
      count: 1,
      units: 'words',
      random: random
    }));
  }

  return words.join(', ');
}

describe('generator', function() {
  it('should give us unique output using Math.random()', function() {
    assert.notEqual(generateWords(null), generateWords(null));
  });

  it('should use a custom pseudo random number generator and still have unique output', function() {
    var alea = new (require('alea'));
    assert.notEqual(generateWords(alea), generateWords(alea));
  });

  it('should create reproducible pseudo random output by seeding a custom PNRG', function() {
    var alea1 = new (require('alea'))('seed');
    var alea2 = new (require('alea'))('seed');

    assert.equal(generateWords(alea1), generateWords(alea2));
  });

  it('should create pseudo random output by using unique seeds for a custom PNRG', function () {
    var alea1 = new (require('alea'))('seed');
    var alea2 = new (require('alea'))('different-seed');

    assert.notEqual(generateWords(alea1), generateWords(alea2));
  });
});
