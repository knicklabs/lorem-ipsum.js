import { getCopyCommand } from ".";
import { COPY } from "../constants/commands";
import { SUPPORTED_PLATFORMS as PLATFORMS } from "../../constants/platforms";

describe("getCopyCommand", () => {
  test("Should return the copy command for Mac OSX", () => {
    expect(getCopyCommand(PLATFORMS.DARWIN)).toEqual(COPY.DARWIN);
  });

  test("Should return the copy command for Linux", () => {
    expect(getCopyCommand(PLATFORMS.LINUX)).toEqual(COPY.LINUX);
    expect(getCopyCommand()).toEqual(COPY.LINUX);
  });

  test("Should return the copy command for Windows", () => {
    expect(getCopyCommand(PLATFORMS.WIN32)).toEqual(COPY.WIN32);
  });
});
