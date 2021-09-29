import { loremIpsum } from ".";
import ProcessHelper from "../test/util/ProcessHelper";
import { LINE_ENDINGS } from "./constants/lineEndings";
import {
  LoremUnit,
  UNIT_PARAGRAPH,
  UNIT_PARAGRAPHS,
  UNIT_SENTENCE,
  UNIT_SENTENCES,
  UNIT_WORD,
  UNIT_WORDS,
 } from "./constants/units";
import { SUPPORTED_PLATFORMS } from "./constants/platforms";

describe("loremIpsum", () => {
  const process = new ProcessHelper();

  afterEach(() => process.resetPlatform());

  test("Should return one sentence by default", () => {
    const result = loremIpsum();
    expect(result.slice(-1)).toEqual(".");

    const sentences = result.split(". ");
    expect(sentences).toHaveLength(1);
  });

  test("Should return the specified number of paragraphs", () => {
    process.setPlatform(SUPPORTED_PLATFORMS.WIN32);
    const count = 5;
    const someUnits: LoremUnit[] = [UNIT_PARAGRAPHS, UNIT_PARAGRAPH];
    someUnits.forEach((units) => {
      const results = loremIpsum({ count, units });
      const paragraphs = results.split(LINE_ENDINGS.WIN32);
      expect(paragraphs).toHaveLength(count);
    });
  });

  test("Should return the specified number of sentences", () => {
    const count = 3;
    const someUnits: LoremUnit[] = [UNIT_SENTENCES, UNIT_SENTENCE];
    someUnits.forEach((units) => {
      const results = loremIpsum({ count, units });
      const sentences = results.split(". ");
      expect(sentences).toHaveLength(count);
    });
  });

  test("Should return the specified number of words", () => {
    const count = 7;
    const someUnits: LoremUnit[] = [UNIT_WORDS, UNIT_WORD];
    someUnits.forEach((units) => {
      const results = loremIpsum({ count, units });
      const words = results.split(" ");
      expect(words).toHaveLength(count);
    });
  });

  test("Should return an empty string for invalid units", () => {
    // @ts-ignore
    expect(loremIpsum({ count: 7, units: "unknown" })).toEqual("");
  });
});
