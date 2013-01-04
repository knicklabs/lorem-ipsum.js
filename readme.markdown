### Lorem Ipsum

Lorem Ipsum is a module and binary for the Node.js platform. Use it to generate passages of lorem ipsum. Lorem ipsum is commonly used placeholder or filler text in publishing, graphic design, and web development.

### Using the Module

Install the Lorem Ipsum module.

```bash
cd ~/MyProject
npm install lorem-ipsum
```

Require the Lorem Ipsum module in your script and use it to generate a passage of lorem ipsum.

```javascript
var loremIpsum = require('lorem-ipsum')
  , output     = loremIpsum();
```

You can pass options to the loremIpsum() function to fine-tune the output. See below.

```javascript
...
output = loremIpsum({
    count: 1                      // Number of words, sentences, or paragraphs to generate.
  , units: 'sentences'            // Generate words, sentences, or paragraphs.
  , sentenceLowerBound: 5         // Minimum words per sentence.
  , sentenceUpperBound: 15        // Maximum words per sentence.
  , paragraphLowerBound: 3        // Minimum sentences per paragraph.
  , paragraphUpperBound: 7        // Maximum sentences per paragraph.
  , format: 'plain'               // Plain text or html.
});
```

### Using the Binary

Install the Lorem Ipsum module globally so that you can access the binary from anywhere.

```bash
npm install lorem-ipsum --global
```

Execute the statement `lorem-ipsum` on the command line to generate a passage of lorem ipsum. You can pass arguments to the program to fine-tune the output. See below.

```bash
lorem-ipsum --units words --count 100 --copy --format html
```

See below for a description of the arguments.

<table>
  <tr>
    <th>Argument</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>--count</td>
    <td>The <strong>number</strong> of words, sentences or paragraphs to generate</td>
  </tr>
  <tr>
    <td>--units</td>
    <td>Generate <strong>words</strong>, <strong>sentences</strong> or <strong>paragraphs</strong></td>
  </tr>
  <tr>
    <td>--copy</td>
    <td><strong>Copy</strong> the output to the system clipboard</td>
  </tr>
  <tr>
    <td>--format</td>
    <td><strong>html</strong> or <strong>plain</strong> text format</td>
  </tr>
</table>

### Notes

The copy feature requires that you have xclip installed if you are using Lorem Ipsum on Linux. The feature will work out of the box on Mac and Windows systems.

### License

This software is licensed under the MIT license.

Copyright (c) 2012 Nickolas Kenyeres

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
