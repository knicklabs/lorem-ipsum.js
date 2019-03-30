import ProcessHelper from "../../test/util/ProcessHelper";
import { FORMAT_HTML, FORMAT_PLAIN, FORMATS } from "../constants/formats";
import { LINE_ENDINGS } from "../constants/lineEndings";
import { SUPPORTED_PLATFORMS } from "../constants/platforms";
import LoremIpsum from "./LoremIpsum";

describe("LoremIpsum", () => {
  const process = new ProcessHelper();

  afterEach(() => process.resetPlatform());

  test("Should throw an error if instantiated with an unsupported format", () => {
    try {
      /* tslint:disable-next-line:no-unused-variable */
      const lorem = new LoremIpsum({}, "blade");
    } catch (error) {
      expect(error).toBeDefined();
      expect(error.message).toEqual(
        `blade is an invalid format. Please use ${FORMATS.join(" or ")}.`,
      );
    }
  });

  describe("getLineEnding", () => {
    test("Should return WIN32 line ending on WIN32", () => {
      const lorem = new LoremIpsum();
      process.setPlatform(SUPPORTED_PLATFORMS.WIN32);
      expect(lorem.getLineEnding()).toEqual(LINE_ENDINGS.WIN32);
    });

    test("Should return POSIX line ending on Mac or Linux", () => {
      const lorem = new LoremIpsum();
      [SUPPORTED_PLATFORMS.DARWIN, SUPPORTED_PLATFORMS.LINUX].forEach((platform) => {
        process.setPlatform(platform);
        expect(lorem.getLineEnding()).toEqual(LINE_ENDINGS.POSIX);
      });
    });

    test("Should return the 'suffix' if it was set", () => {
      const lorem = new LoremIpsum({}, FORMAT_PLAIN, "*");
      expect(lorem.getLineEnding()).toEqual("*");
    });
  });

  describe("formatString", () => {
    const str = "string";

    test("Should return the string by default", () => {
      const lorem = new LoremIpsum();
      expect(lorem.formatString(str)).toEqual(str);
    });

    test("Should return the string if the format is set to 'plain'", () => {
      const lorem = new LoremIpsum({}, FORMAT_PLAIN);
      expect(lorem.formatString(str)).toEqual(str);
    });

    test("Should return the string wrapped in p tags if the format is set to 'html'", () => {
      const lorem = new LoremIpsum({}, FORMAT_HTML);
      expect(lorem.formatString(str)).toEqual(`<p>${str}</p>`);
    });
  });

  describe("formatStrings", () => {
    const strings = ["string", "string-a", "string-b"];

    test("Should return the string by default", () => {
      const lorem = new LoremIpsum();
      const results = lorem.formatStrings(strings);
      results.forEach((result, index) => {
        expect(result).toEqual(strings[index]);
      });
    });

    test("Should return the string if the format is set to 'plain'", () => {
      const lorem = new LoremIpsum({}, FORMAT_PLAIN);
      const results = lorem.formatStrings(strings);
      results.forEach((result, index) => {
        expect(result).toEqual(strings[index]);
      });
    });

    test("Should return the string wrapped in p tags if the foramt is set to 'html'", () => {
      const lorem = new LoremIpsum({}, FORMAT_HTML);
      const results = lorem.formatStrings(strings);
      results.forEach((result, index) => {
        expect(result).toEqual(`<p>${strings[index]}</p>`);
      });
    });
  });

  describe("generateWords", () => {
    it("should generate a specific number of words", () => {
      const lorem = new LoremIpsum();
      const results = lorem.generateWords(7);
      const words = results.split(" ");
      expect(words).toHaveLength(7);
    });

    it("should generate a number of words between the min and max", () => {
      const max = 5;
      const min = 3;
      const lorem = new LoremIpsum({
        wordsPerSentence: { max, min },
      });
      for (let i = 0; i < 100; i++) {
        const results = lorem.generateWords();
        const words = results.split(" ");
        expect(words.length <= max).toEqual(true);
        expect(words.length >= min).toEqual(true);
      }
    });
  });

  describe("generateSentences", () => {
    it("should generate a specific number of sentences", () => {
      const lorem = new LoremIpsum();
      const results = lorem.generateSentences(18);
      const sentences = results.split(". ");
      expect(sentences).toHaveLength(18);
    });

    it("should generate a number of sentences between the min and max", () => {
      const max = 19;
      const min = 16;
      const lorem = new LoremIpsum({
        sentencesPerParagraph: { max, min },
      });
      for (let i = 0; i < 100; i++) {
        const results = lorem.generateSentences();
        const sentences = results.split(". ");
        expect(sentences.length <= max).toEqual(true);
        expect(sentences.length >= min).toEqual(true);
      }
    });
  });

  describe("generateParagraphs", () => {
    it("should generate a specific number of paragraphs", () => {
      process.setPlatform(SUPPORTED_PLATFORMS.WIN32);
      const lorem = new LoremIpsum();
      const results = lorem.generateParagraphs(3);
      const paragraphs = results.split(LINE_ENDINGS.WIN32);
      expect(paragraphs).toHaveLength(3);
    });
  });
});
