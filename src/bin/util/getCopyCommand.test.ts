import { getCopyCommand } from ".";
import { SUPPORTED_PLATFORMS } from "../../constants/platforms";
import { COPY } from "../constants/commands";

describe("getCopyCommand", () => {
  test("Should return the copy command for Mac OSX", () => {
    expect(getCopyCommand(SUPPORTED_PLATFORMS.DARWIN)).toEqual(COPY.DARWIN);
  });

  test("Should return the copy command for Linux", () => {
    expect(getCopyCommand(SUPPORTED_PLATFORMS.LINUX)).toEqual(COPY.LINUX);
    expect(getCopyCommand()).toEqual(COPY.LINUX);
  });

  test("Should return the copy command for Windows", () => {
    expect(getCopyCommand(SUPPORTED_PLATFORMS.WIN32)).toEqual(COPY.WIN32);
  });
});
