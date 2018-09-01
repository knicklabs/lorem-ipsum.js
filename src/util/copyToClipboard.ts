import { exec } from "child_process";
import { getCopyCommand, getPlatform, isSupportedPlatform } from ".";

const copyToClipboard = (text: string): Promise<string> => {
  return new Promise(
    (resolve: (text: string) => void, reject: (error: Error) => void) => {
      try {
        const platform = getPlatform();
        if (isSupportedPlatform(platform) === false) {
          throw new Error(`Copy is not supported for ${platform}`);
        }
        const command = `echo "${text}" | ${getCopyCommand(platform)}`;
        exec(command, (error) => {
          if (error) {
            throw error;
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
