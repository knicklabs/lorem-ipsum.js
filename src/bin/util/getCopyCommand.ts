import { COPY } from "../constants/commands";
import { SUPPORTED_PLATFORMS as PLATFORMS } from "../../constants/platforms";

/**
 * @param platform  The process platform.
 * @returns         The copy command for the process platform.
 */
const getCopyCommand = (platform: string = ""): string => {
  switch (platform.toLowerCase()) {
    case PLATFORMS.DARWIN:
      return COPY.DARWIN;
    case PLATFORMS.WIN32:
      return COPY.WIN32;
    case PLATFORMS.LINUX:
    default:
      return COPY.LINUX;
  }
};

export default getCopyCommand;
