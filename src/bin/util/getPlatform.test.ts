import { getPlatform } from ".";
import { CANNOT_DETERMINE_PLATFORM } from "../constants/errors";
import { SUPPORTED_PLATFORMS as PLATFORMS } from "../../constants/platforms";

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
    Object.values(PLATFORMS).forEach((platform: string) => {
      setPlatform(platform);
      expect(getPlatform()).toEqual(platform);
    });
  });
});
