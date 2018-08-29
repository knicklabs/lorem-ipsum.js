import { SUPPORTED_PLATFORMS as PLATFORMS } from "../constants/platforms";

/**
 * @param platform  The process platform.
 * @returns         The copy command for the process platform.
 */
const getCopyCommand = (platform: string): string => {
  switch (platform.toLowerCase()) {
    case PLATFORMS.DARWIN:
      return "pbcopy";
    case PLATFORMS.WIN32:
      return "clip";
    case PLATFORMS.LINUX:
    default:
      return "xclip -selection clipboard";
  }
};

export default getCopyCommand;
