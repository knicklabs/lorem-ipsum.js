var generator = function() {
  var options = (arguments.length) ? arguments[0] : {}
    , count = options.count || 250
    , units = options.units || 'words'
    , sentenceLowerBound = options.sentenceLowerBound || 5
    , sentenceUpperBound = options.sentenceUpperBound || 15
	, paragraphLowerBound = options.paragraphLowerBound || 3
	, paragraphUpperBound = options.paragraphUpperBound || 7
	, paragraphPrefix = options.paragraphPrefix || '<p>'
	, paragraphSuffix = options.paragraphSuffix || '</p>'
    , words = require('./dictionary').words;
  
  var randomInteger = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  
  var randomWord = function(words) {
    return words[randomInteger(0, words.length - 1)];
  };
  
  var randomSentence = function(words, lowerBound, upperBound) {
    var sentence = ''
      , bounds = {min: 0, max: randomInteger(lowerBound, upperBound)};
    
    while (bounds.min < bounds.max) {
      sentence = sentence + ' ' + randomWord(words);
      bounds.min = bounds.min + 1;
    }
    
    if (sentence.length) {
      sentence = sentence.slice(1);
      sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
    }
  
    return sentence;
  };

  var randomParagraph = function(words, lowerBound, upperBound, sentenceLowerBound, sentenceUpperBound) {
    var paragraph = ''
      , bounds = {min: 0, max: randomInteger(lowerBound, upperBound)};
      
    while (bounds.min < bounds.max) {
      paragraph = paragraph + '. ' + randomSentence(words, sentenceLowerBound, sentenceUpperBound);
      bounds.min = bounds.min + 1;
    }
    
    if (paragraph.length) {
      paragraph = paragraph.slice(2);
      paragraph = paragraph + '.';
    }
    
    return paragraph;
  }
  
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
        string = string + paragraphPrefix + randomParagraph(words, paragraphLowerBound, paragraphUpperBound, sentenceLowerBound, sentenceUpperBound) + paragraphSuffix;
        break;
    }
    bounds.min = bounds.min + 1;
  }
    
  if (string.length) {
    var pos = 0;
    
    if (string.indexOf('. ') == 0) {
      pos = 2;
    } else if (string.indexOf('.') == 0 || string.indexOf(' ') == 0) {
      pos = 1;
    }
    
    string = string.slice(pos);
    
    if (units == 'sentences') {
      string = string + '.';
    }
  }  
  
  return string;
};

module.exports = generator;
