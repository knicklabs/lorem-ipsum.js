import { exec } from "child_process";
import { getCopyCommand, getPlatform, isSupportedPlatform } from ".";

/**
 * Copy text to the clipboard using a platform's native command.
 * @param  text  The text to copy.
 * @returns      A promise that resolves with the text to copy.
 */
const copyToClipboard = (text: string): Promise<string> => {
  return new Promise(
    (resolve: (text: string) => void, reject: (error: Error) => void) => {
      try {
        const platform = getPlatform();
        if (isSupportedPlatform(platform) === false) {
          throw new Error(`Copy is not supported for ${platform}`);
        }
        const command = `echo "${text}" | ${getCopyCommand(platform)}`;
        exec(command, (error, stdout, stderr) => {
          /* istanbul ignore if */
          if (error) {
            return reject(error);
          }

          if (stderr) {
            return reject(new Error(stderr));
          }

          return resolve(text);
        });
      } catch (error) {
        return reject(error);
      }
    },
  );
};

export default copyToClipboard;
