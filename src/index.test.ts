import { loremIpsum } from ".";
import ProcessHelper from "../test/util/ProcessHelper";
import { LINE_ENDINGS } from "./constants/lineEndings";
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
    ["paragraphs", "paragraph"].forEach((units) => {
      const results = loremIpsum({ count, units });
      const paragraphs = results.split(LINE_ENDINGS.WIN32);
      expect(paragraphs).toHaveLength(count);
    });
  });

  test("Should return the specified number of sentences", () => {
    const count = 3;
    ["sentences", "sentence"].forEach((units) => {
      const results = loremIpsum({ count, units });
      const sentences = results.split(". ");
      expect(sentences).toHaveLength(count);
    });
  });

  test("Should return the specified number of words", () => {
    const count = 7;
    ["words", "word"].forEach((units) => {
      const results = loremIpsum({ count, units });
      const words = results.split(" ");
      expect(words).toHaveLength(count);
    });
  });

  test("Should return any empty string for invalid units", () => {
    expect(loremIpsum({ count: 7, units: "unknown" })).toEqual("");
  });
});
