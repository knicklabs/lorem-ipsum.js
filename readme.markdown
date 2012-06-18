### Introducing Node Lorem Ipsum

Node Lorem Ipsum generates placeholder text using a lorem ipsum dictionary. It can be used as a module in your Node.js programs or it can be used from the command line via its command line interface (CLI).

### Getting Started with the Module

Install Node Lorem Ipsum locally in your program directory.

``` bash
npm install lorem-ipsum
```

You can then require Node Lorem Ipsum. It returns a function which generates a string of text when invoked. 

``` javascript
var lorem-ipsum = require('lorem-ipsum')
  , string = lorem-ipsum();
```

By default, Node Lorem Ipsum outputs a string of random words. You can pass options to fine-tune the output.
The default options are shown in the example above along with descriptions of what each option controls. 

``` javascript
var lorem-ipsum = require('lorem-ipsum')
  , string = lorem-ipsum({
        count: 250              // Number of words, sentences, or paragraphs.
      , units: 'words'          // Choose 'words', 'sentences', or 'paragraphs'.  
      , sentenceLowerBound: 5   // Minimum words per sentence.
      , sentenceUpperBound: 15  // Maximum words per sentence. 
      , paragraphLowerBound: 3  // Minimum sentences per paragraph.
      , paragraphUpperBound: 7  // Maximum sentences per paragraph.
      , paragraphPrefix: '<p>'  // Text to insert before paragraph.
      , paragraphSuffix: '</p>' // Text to insert after paragraph.
    });
```

### Getting Started with the CLI

Install Node Lorem Ipsum globally to use the command line interface.

``` bash
npm install lorem-ipsum -g
```

You can then run the command `lorem-ipsum` to randomly generate 5 sentences of text. You can excercise further 
control using flags. For example, the following command returns 3 paragraphs of text and copies it to your clipboard.

``` bash
lorem-ipsum 3 --paragraphs --copy
```

The following is a list of acceptable arguments. Order does not matter.

<table>
  <tr>
    <th>Argument or Flag</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Integer</td>
    <td>The number of words, sentences or paragraphs to generate</td>
  </tr>
  <tr>
    <td>--copy or -cp</td>
    <td>Copy the output to the clipboard</td>
  </tr>
  <tr>
    <td>--words or --word or -w</td>
    <td>Generate words</td>
  </tr>
  <tr>
    <td>--sentences or --sentence or -s</td>
    <td>Generate sentences</td>
  </tr>
  <tr>
    <td>--paragraphs or --paragraph or -p</td>
    <td>Generate paragraphs</td>
  </tr>
</table>

### License

Copyright (c) 2012 Nickolas Kenyeres

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.