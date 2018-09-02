import { SUPPORTED_PLATFORMS as PLATFORMS } from "../constants/platforms";

/**
 * @param platform  The process platform.
 * @returns         True if the process platform is supported.
 */
const isSupportedPlatform = (platform: string): boolean => {
  return Object.values(PLATFORMS).indexOf(platform.toLowerCase()) !== -1;
};

export default isSupportedPlatform;
