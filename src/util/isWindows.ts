import { SUPPORTED_PLATFORMS } from "../constants/platforms";

/**
 * @returns True if process is windows.
 */
const isWindows = (): boolean => {
  return typeof process !== "undefined" && process.platform === SUPPORTED_PLATFORMS.WIN32;
};

export default isWindows;
