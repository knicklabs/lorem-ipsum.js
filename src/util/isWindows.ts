import { SUPPORTED_PLATFORMS } from "../constants/platforms";

/**
 * @returns True if process is windows.
 */
const isWindows = (): boolean => {
  let isWindowsResult: boolean = false;
  try {
    isWindowsResult = process.platform === SUPPORTED_PLATFORMS.WIN32;
  } catch (e) {
    isWindowsResult = false;
  }
  return isWindowsResult;
};

export default isWindows;
