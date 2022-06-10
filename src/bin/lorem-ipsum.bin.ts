import { Option, program } from "commander";
import { loremIpsum } from "..";
import { FORMATS, FORMAT_PLAIN } from "../constants/formats";
import { REGEX } from "../constants/regex";
import { DESCRIPTION, USAGE } from "./constants/cli";
import { copyToClipboard, getVersion } from "./util";

program
  .version(getVersion())
  .usage(USAGE)
  .description(DESCRIPTION)
  .argument('count', 'The number of units')
  .argument('units', 'Words, sentences, or paragraphs')
  .option("-c --copy", "Copy")
  .addOption(new Option("-f --format <format>", "Format").choices(FORMATS).default(FORMAT_PLAIN))
  .action((
    num: string = "1",
    units: "words" | "word" | "sentences" | "sentence" | "paragraphs" | "paragraph" | undefined = "sentence",
  ) => {
    if (REGEX.UNITS.test(units) === false) {
      // tslint:disable-next-line:no-console
      console.error(
        `${units} is not valid. Choose from paragraph(s), sentence(s), or word(s).`,
      );
      process.exit(1);
    }

    const count = parseInt(num, 10);
    if (!count || count < 1) {
      // tslint:disable-next-line:no-console
      console.error(`${count} is not valid. Choose a number greater than 1.`);
      process.exit(1);
    }

    const output = loremIpsum({
      count,
      format: program.getOptionValue('format'),
      units,
    });

    // tslint:disable-next-line:no-console
    console.log(output);

    if (program.getOptionValue('copy') === true) {
      copyToClipboard(output)
        .then(() => {
          // tslint:disable-next-line:no-console
          console.log("");

          // tslint:disable-next-line:no-console
          console.log("✓ copied");
        })
        .catch((err) => {
          // tslint:disable-next-line:no-console
          console.log(err.message);
        });
    }
  });

program.parse(process.argv);
