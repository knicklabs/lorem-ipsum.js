import { FORMAT_HTML, FORMAT_PLAIN, FORMATS } from "./constants/formats";
import { LINE_ENDINGS } from "./constants/lineEndings";
import Generator, { IGeneratorOptions, IPrng } from "./lib/generator";
import { isNode, isReactNative, isWindows, makeArrayOfStrings } from "./util";

export class LoremIpsum {
  public generator: Generator;
  public format: string;
  public suffix?: string;

  constructor(
    options: IGeneratorOptions,
    format: string = FORMAT_PLAIN,
    suffix: string,
  ) {
    if (FORMATS.indexOf(format.toLowerCase()) === -1) {
      throw new Error(
        `${format} is an invalid format. Please us ${FORMATS.join(" or ")}.`,
      );
    }

    this.format = format.toLowerCase();
    this.suffix = suffix;
    this.generator = new Generator(options);
  }

  public getLineEnding() {
    if (this.suffix) {
      return this.suffix;
    }

    if (!isReactNative() && isNode() && isWindows()) {
      return LINE_ENDINGS.WIN32;
    }

    return LINE_ENDINGS.POSIX;
  }

  public formatString(str: string): string {
    if (this.format === FORMAT_HTML) {
      return `<p>${str}</p>`;
    }
    return str;
  }

  public generateWords(num: number): string {
    return this.formatString(this.generator.generateRandomWords(num));
  }

  public generateSentences(num: number): string {
    return this.formatString(this.generator.generateRandomParagraph(num));
  }
}

export default LoremIpsum;
