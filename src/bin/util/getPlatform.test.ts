import { getPlatform } from ".";
import { SUPPORTED_PLATFORMS } from "../../constants/platforms";
import { CANNOT_DETERMINE_PLATFORM } from "../constants/errors";

describe("getPlatform", () => {
  const cachedPlatform = process.platform;

  const setPlatform = (platform?: string) => {
    Object.defineProperty(process, "platform", {
      value: platform,
    });
  };

  afterEach(() => {
    setPlatform(cachedPlatform);
  });

  test("Should throw an error if it cannot determine the paltform", () => {
    setPlatform();
    try {
      getPlatform();
    } catch (error) {
      expect(error).toBeDefined();
      expect(error.message).toEqual(CANNOT_DETERMINE_PLATFORM);
    }
  });

  test("Should return the platform", () => {
    Object.values(SUPPORTED_PLATFORMS).forEach((platform: string) => {
      setPlatform(platform);
      expect(getPlatform()).toEqual(platform);
    });
  });
});
