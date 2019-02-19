import Generator from "./generator";

describe("generator", () => {
  let generator: Generator;

  beforeEach(() => {
    generator = new Generator();
  });

  test("Should throw an error if instantiated with non-sensical paragraph bounds", () => {
    try {
      generator = new Generator({
        sentencesPerParagraph: { max: 1, min: 7 },
      });
    } catch (error) {
      expect(error).toBeDefined();
      expect(error.message).toEqual(
        `Minimum number of sentences per paragraph (7) cannot exceed maximum (1).`,
      );
    }
  });

  test("Should throw an error if instantiated with non-sensical sentence bounds", () => {
    try {
      generator = new Generator({
        wordsPerSentence: { max: 1, min: 7 },
      });
    } catch (error) {
      expect(error).toBeDefined();
      expect(error.message).toEqual(
        `Minimum number of words per sentence (7) cannot exceed maximum (1).`,
      );
    }
  });

  test("Should use Math.random as the default PRNG", () => {
    generator = new Generator();
    expect(generator.random).toEqual(Math.random);
  });

  test("Should use a custom PRNG if provided with one", () => {
    const random = jest.fn();
    generator = new Generator({ random });
    expect(generator.random).toEqual(random);
  });

  describe("generateRandomInteger", () => {
    test("Should generate an exact number given an equal min and max", () => {
      expect(generator.generateRandomInteger(7, 7)).toEqual(7);
    });

    test("Should generate a random number between the min and max", () => {
      const min = 1;
      const max = 3;
      for (let i = 0; i < 100; i++) {
        const result = generator.generateRandomInteger(min, max);
        expect(result <= max).toEqual(true);
        expect(result >= min).toEqual(true);
      }
    });
  });

  describe("generateRandomWords", () => {
    test("Should generate a specific number of random words", () => {
      const result = generator.generateRandomWords(5);
      expect(result.split(" ")).toHaveLength(5);
    });

    test("Should generate a random number of words between the min and max", () => {
      const min = 2;
      const max = 4;
      generator = new Generator({
        wordsPerSentence: { max, min },
      });
      for (let i = 0; i < 100; i++) {
        const result = generator.generateRandomWords();
        const words = result.split(" ");
        expect(words.length <= max).toEqual(true);
        expect(words.length >= min).toEqual(true);
      }
    });
  });

  describe("generateRandomSentence", () => {
    test("Should generate a sentence that ends with a period", () => {
      const result = generator.generateRandomSentence();
      expect(result.slice(-1)).toEqual(".");
    });

    test("Should generate a random sentence that has a specific number of words", () => {
      const result = generator.generateRandomSentence(10);
      expect(result.split(" ")).toHaveLength(10);
    });

    test("Should generate a random sentence that has a number of words between min and max", () => {
      const min = 3;
      const max = 5;
      generator = new Generator({
        wordsPerSentence: { max, min },
      });
      for (let i = 0; i < 100; i++) {
        const result = generator.generateRandomSentence();
        const words = result.split(" ");
        expect(words.length <= max).toEqual(true);
        expect(words.length >= min).toEqual(true);
      }
    });
  });

  describe("generateRandomParagraph", () => {
    test("Should generate a random paragraph with a specific number of sentences", () => {
      const result = generator.generateRandomParagraph(10);
      expect(result.split(". ")).toHaveLength(10);
    });

    test("Should generate a random paragraph with a number of sentences between min and max", () => {
      const min = 14;
      const max = 16;
      generator = new Generator({
        sentencesPerParagraph: { max, min },
      });
      for (let i = 0; i < 100; i++) {
        const result = generator.generateRandomParagraph();
        const sentences = result.split(". ");
        expect(sentences.length <= max).toEqual(true);
        expect(sentences.length >= min).toEqual(true);
      }
    });
  });
});
