import { WORDS } from "../constants/words";
import { capitalize, makeArrayOfLength } from "../util";

export interface IBounds {
  min: number;
  max: number;
}

export type IPrng = () => number;

export type ISeedRandom = new (seed?: string) => IPrng;

export interface IMath {
  seedrandom: ISeedRandom;
}

export interface IGeneratorOptions {
  sentencesPerParagraph?: IBounds;
  wordsPerSentence?: IBounds;
  random?: IPrng;
  seed?: string;
  words?: string[];
}

class Generator {
  public sentencesPerParagraph: IBounds;
  public wordsPerSentence: IBounds;
  public random: IPrng;
  public words: string[];

  constructor({
    sentencesPerParagraph = { max: 7, min: 3 },
    wordsPerSentence = { max: 15, min: 5 },
    random,
    seed,
    words = WORDS,
  }: IGeneratorOptions = {}) {
    if (sentencesPerParagraph.min > sentencesPerParagraph.max) {
      throw new Error(
        `Minimum number of sentences per paragraph (${
          sentencesPerParagraph.min
        }) cannot exceed maximum (${sentencesPerParagraph.max}).`,
      );
    }

    if (wordsPerSentence.min > wordsPerSentence.max) {
      throw new Error(
        `Minimum number of words per sentence (${
          wordsPerSentence.min
        }) cannot exceed maximum (${wordsPerSentence.max}).`,
      );
    }

    this.sentencesPerParagraph = sentencesPerParagraph;
    this.words = words;
    this.wordsPerSentence = wordsPerSentence;
    this.random = random || Math.random;
  }

  public generateRandomInteger(min: number, max: number): number {
    return Math.floor(this.random() * (max - min + 1) + min);
  }

  public generateRandomWords(num?: number): string {
    const { min, max } = this.wordsPerSentence;
    const length = num || this.generateRandomInteger(min, max);
    return makeArrayOfLength(length)
      .reduce((accumulator: string, index: number): string => {
        return `${this.pluckRandomWord()} ${accumulator}`;
      }, "")
      .trim();
  }

  public generateRandomSentence(num?: number): string {
    return `${capitalize(this.generateRandomWords(num))}.`;
  }

  public generateRandomParagraph(num?: number): string {
    const { min, max } = this.sentencesPerParagraph;
    const length = num || this.generateRandomInteger(min, max);
    return makeArrayOfLength(length)
      .reduce((accumulator: string, index: number): string => {
        return `${this.generateRandomSentence()} ${accumulator}`;
      }, "")
      .trim();
  }

  public pluckRandomWord(): string {
    const min = 0;
    const max = this.words.length - 1;
    const index = this.generateRandomInteger(min, max);
    return this.words[index];
  }
}

export default Generator;
