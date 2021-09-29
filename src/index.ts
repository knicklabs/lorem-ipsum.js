import { LoremFormat, FORMAT_PLAIN } from "./constants/formats";
import {
  LoremUnit,
  UNIT_PARAGRAPH,
  UNIT_PARAGRAPHS,
  UNIT_SENTENCES,
  UNIT_SENTENCE,
  UNIT_WORDS,
  UNIT_WORD,
} from "./constants/units";
import { WORDS } from "./constants/words";
import { IPrng } from "./lib/generator";
import LoremIpsum from "./lib/LoremIpsum";

export interface ILoremIpsumParams {
  count?: number;
  format?: LoremFormat;
  paragraphLowerBound?: number;
  paragraphUpperBound?: number;
  random?: IPrng;
  sentenceLowerBound?: number;
  sentenceUpperBound?: number;
  units?: LoremUnit;
  words?: string[];
  suffix?: string;
}

const loremIpsum = ({
  count = 1,
  format = FORMAT_PLAIN,
  paragraphLowerBound = 3,
  paragraphUpperBound = 7,
  random,
  sentenceLowerBound = 5,
  sentenceUpperBound = 15,
  units = UNIT_SENTENCES,
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
    case UNIT_PARAGRAPHS:
    case UNIT_PARAGRAPH:
      return lorem.generateParagraphs(count);
    case UNIT_SENTENCES:
    case UNIT_SENTENCE:
      return lorem.generateSentences(count);
    case UNIT_WORDS:
    case UNIT_WORD:
      return lorem.generateWords(count);
    default:
      return "";
  }
};

export { loremIpsum, LoremIpsum };
