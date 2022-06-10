# lorem-ipsum

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/a0984231f0ac46efa617cf401964f8b6)](https://www.codacy.com/gh/knicklabs/lorem-ipsum.js/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=knicklabs/lorem-ipsum.js&amp;utm_campaign=Badge_Grade)
[![Coverage Status](https://coveralls.io/repos/github/knicklabs/lorem-ipsum.js/badge.svg?branch=main)](https://coveralls.io/github/knicklabs/lorem-ipsum.js?branch=main) [![npm version](https://badge.fury.io/js/lorem-ipsum.svg)](https://badge.fury.io/js/lorem-ipsum) ![node](https://img.shields.io/badge/node-8x-blue.svg) ![npm](https://img.shields.io/badge/npm-5x-blue.svg)

## Overview

🎉 __Celebrating 10 years of `lorem-ipsum`__ 🎉

`lorem-ipsum` is a JavaScript module for generating passages of lorem
ipsum text. Lorem ipsum text is commonly used as placeholder text in
publishing, graphic design, and web development.

`lorem-ipsum` is compatible with the browser, Node.JS, and React Native.

## Important Notes

THIS README IS FOR VERSION 2. SWITCH TO `1-STABLE` BRANCH FOR THE
VERSION 1 DOCUMENTATION.

IF YOU NEED COMPATIBILITY WITH OLDER VERSIONS OF NODEJS, PLEASE USE V1.0.6 WHICH IS 
COMPATIBLE BACK TO NODE 0.4. `npm i lorem-ipsum@1.0.6`

## Installation

```
npm i lorem-ipsum
```

## Using the Class

The class is the recommended way to use `lorem-ipsum` since version 2.
It makes it simpler to generate text using the same options.

```
import { LoremIpsum } from "lorem-ipsum";
// const LoremIpsum = require("lorem-ipsum").LoremIpsum;

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

lorem.generateWords(1);
lorem.generateSentences(5);
lorem.generateParagraphs(7);
```

## Using the Function

`lorem-ipsum` version 2 exports a function that is backwards-
compatible with the default function exported by `lorem-ipsum` version
1. Users of version 1 should be able to upgrade to version 2 without 
any issue; they can just continue using this library as they did before.

```
import { loremIpsum } from "lorem-ipsum";
// const loremIpsum = require("lorem-ipsum").loremIpsum;

loremIpsum(); // generates one sentence
```

Like before, you can pass in a number of options to customize the output.
The example below shows the default options.

```
import { loremIpsum } from "lorem-ipsum";

loremIpsum({
  count: 1,                // Number of "words", "sentences", or "paragraphs"
  format: "plain",         // "plain" or "html"
  paragraphLowerBound: 3,  // Min. number of sentences per paragraph.
  paragraphUpperBound: 7,  // Max. number of sentences per paragarph.
  random: Math.random,     // A PRNG function
  sentenceLowerBound: 5,   // Min. number of words per sentence.
  sentenceUpperBound: 15,  // Max. number of words per sentence.
  suffix: "\n",            // Line ending, defaults to "\n" or "\r\n" (win32)
  units: "sentences",      // paragraph(s), "sentence(s)", or "word(s)"
  words: ["ad", ...]       // Array of words to draw from
})
```

## Using the CLI

`lorem-ipsum` includes a command line interface (CLI) program for generating 
passages of lorem ipsum text directly from your terminal. This CLI program 
is compatible with Mac OSX, Windows, and Linux. On Linux you will need to 
install xclip. On Ubuntu: `apt-get install xclip`.

Simply install the module globally to take advantage of this feature.

```
npm i -g lorem-ipsum
```

Execute the statement `lorem-ipsum [count] [units]` from your terminal to
generate a passage of lorem ipsum text. You can additional arguments to
the program.

```
lorem-ipsum --version
# Displays the version number

lorem-ipsum --help
# Displays the help documentation

lorem-ipsum 1 word
# Prints one word

lorem-ipsum 2 words
# Prints two words

lorem-ipsum 1 sentence
# Prints one sentence

lorem-ipsum 2 sentences
# Prints two sentences

lorem-ipsum 1 paragraph
# Prints one paragraph

lorem-ipsum 2 paragraphs
# Prints two paragraphs

lorem-ipsum 2 paragraphs --copy
# Prints two pargraphs and copies it to your clipboard

lorem-ipsum 2 pargraphs --format html
# Prints two paragraphs in HTML format

lorem-ipsum 2 paragraphs --format html --copy
# Prints two paragraphs in HTML format and copies it to your clipboard.
```

Uprading from version 1.x? The `--count` and `--units` options have been 
dropped in favor of the natural language interface shown in the examples
above.

## License

Copyright (c) 2012-2022 Nickolas Kenyeres <nickolas@knicklabs.com>

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
