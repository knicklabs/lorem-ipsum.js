var generator = function(options) {
  var count = options.count || 250
    , units = options.units || 'words'
    , sentenceLowerBound = options.sentenceLowerBound || 5
    , sentenceUpperBound = options.sentenceUpperBound || 15
    , words = require('./dictionary').words;
  
  var randomInteger = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  
  var randomWord = function(words) {
    return words[randomInteger(0, words.length)];
  };
  
  var randomSentence = function(words, lowerBound, upperBound) {
    var sentence = ''
      , bounds = {min: 0, max: randomInteger(lowerBound, upperBound)};
    
    while (bounds.min < bounds.max) {
      sentence = sentence + ' ' + randomWord(words);
      bounds.min = bounds.min + 1;
    }
    
    return sentence;
  };
  
  var iter = 0
    , bounds = {min: 0, max: count}
    , string = '';
      
  while (bounds.min < bounds.max) {
    switch (units.toLowerCase()) {
      case 'words':
        string = string + ' ' + randomWord(words);
        break;
      case 'sentences':
        string = string + '. ' + randomSentence(words, sentenceLowerBound, sentenceUpperBound);
        break;
      case 'paragraphs':
        string = string + "\r" + randomParagraph(words, paragraphLowerBound, paragraphUpperBound);
        break;
    }
    bounds.min = bounds.min + 1;
  }
    
  return string;
};

module.exports = generator;
