import { SUPPORTED_PLATFORMS as PLATFORMS } from "../constants/platforms";

/**
 * @returns True if process is windows.
 */
const isWindows = (): boolean => {
  return typeof process !== "undefined" && process.platform === PLATFORMS.WIN32;
};

export default isWindows;
