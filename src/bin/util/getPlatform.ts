import { CANNOT_DETERMINE_PLATFORM } from "../constants/errors";

/**
 * @returns  The process platform.
 * @throws
 */
const getPlatform = (): string => {
  if (!process || typeof process.platform !== "string") {
    throw new Error(CANNOT_DETERMINE_PLATFORM);
  }
  return process.platform;
};

export default getPlatform;
