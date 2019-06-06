import { WORDS } from "./constants/words";
import { IPrng } from "./lib/generator";
import LoremIpsum from "./lib/LoremIpsum";

export interface ILoremIpsumParams {
  count?: number;
  format?: "plain" | "html";
  paragraphLowerBound?: number;
  paragraphUpperBound?: number;
  random?: IPrng;
  sentenceLowerBound?: number;
  sentenceUpperBound?: number;
  units?: "words" | "word" | "sentences" | "sentence" | "paragraphs" | "paragraph";
  words?: string[];
  suffix?: string;
}

const loremIpsum = ({
  count = 1,
  format = "plain",
  paragraphLowerBound = 3,
  paragraphUpperBound = 7,
  random,
  sentenceLowerBound = 5,
  sentenceUpperBound = 15,
  units = "sentences",
  words = WORDS,
  suffix = "",
}: ILoremIpsumParams = {}): string => {
  const options = {
    random,
    sentencesPerParagraph: {
      max: paragraphUpperBound,
      min: paragraphLowerBound,
    },
    words,
    wordsPerSentence: {
      max: sentenceUpperBound,
      min: sentenceLowerBound,
    },
  };

  const lorem: LoremIpsum = new LoremIpsum(options, format, suffix);

  switch (units) {
    case "paragraphs":
    case "paragraph":
      return lorem.generateParagraphs(count);
    case "sentences":
    case "sentence":
      return lorem.generateSentences(count);
    case "words":
    case "word":
      return lorem.generateWords(count);
    default:
      return "";
  }
};

export { loremIpsum, LoremIpsum };
