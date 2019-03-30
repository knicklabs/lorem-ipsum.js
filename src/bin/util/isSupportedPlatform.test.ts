import { isSupportedPlatform } from ".";
import { SUPPORTED_PLATFORMS } from "../../constants/platforms";

describe("isSupportedPlatform", () => {
  test("Should return true if the platform is supported", () => {
    Object.values(SUPPORTED_PLATFORMS).forEach((platform) => {
      expect(isSupportedPlatform(platform)).toEqual(true);
    });
  });

  test("Should return false if the platform is unsupported", () => {
    expect(isSupportedPlatform("os2")).toEqual(false);
  });
});
