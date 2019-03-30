import { SUPPORTED_PLATFORMS } from "../../constants/platforms";
import { COPY } from "../constants/commands";

/**
 * @param platform  The process platform.
 * @returns         The copy command for the process platform.
 */
const getCopyCommand = (platform: string = ""): string => {
  switch (platform.toLowerCase()) {
    case SUPPORTED_PLATFORMS.DARWIN:
      return COPY.DARWIN;
    case SUPPORTED_PLATFORMS.WIN32:
      return COPY.WIN32;
    case SUPPORTED_PLATFORMS.LINUX:
    default:
      return COPY.LINUX;
  }
};

export default getCopyCommand;
