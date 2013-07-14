/*
 * Series of unit tests to test randomness of output.
 */
module.exports = {
  setUp: function(callback) {
    this.generator = require('./../lib/generator');
    this.random = Math.random;
    callback();
  },

  /*
   * Test that using Math.random() gives us unique output.
   */
  testForUniqueOutput: function(test) {
    test.notDeepEqual(generateWords(null), generateWords(null));
    test.done();
  },

  /*
   * Test that we can use a custom pseduo random number generator
   * and still have unique output.
   */
  testForUniqueOutputWithCustomGenerator: function(test) {
    var alea = new (require('alea'));

    test.notDeepEqual(generateWords(alea), generateWords(alea));
    test.done();
  },

  /*
   * Test that we can create reproducible pseudo random output by
   * seeding a custom PNRG.
   */
  testForReproducibleOutputWithCustomGenerator: function(test) {
    var alea1 = new (require('alea'))('seed');
    var alea2 = new (require('alea'))('seed');

    test.deepEqual(generateWords(alea1), generateWords(alea2));
    test.done();
  },

  /*
   * Test that we can create pseudo random output by using unique
   * seeds for a custom PNRG.
   */
  testForUniqueOutputWithCustomGeneratorWithUniqueSeeds: function(test) {
    var alea1 = new (require('alea'))('seed');
    var alea2 = new (require('alea'))('different-seed');

    test.notDeepEqual(generateWords(alea1), generateWords(alea2));
    test.done();
  }
};

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