/* tslint:disable-next-line:no-implicit-dependencies */
import nockExec from "nock-exec";
import { copyToClipboard } from ".";
import ProcessHelper from "../../../test/util/ProcessHelper";
import { SUPPORTED_PLATFORMS } from "../../constants/platforms";
import { COPY } from "../constants/commands";

describe("copyToClipboard", () => {
  const process = new ProcessHelper();
  const str = "Some string";

  afterEach(() => process.resetPlatform());

  it("should throw an error if the platform is not supported", (done) => {
    process.setPlatform("OS2");

    copyToClipboard(str).catch((error) => {
      expect(error).toBeDefined();
      expect(error.message).toEqual(`Copy is not supported for OS2`);
      done();
    });
  });

  it("should copy to the clipboard if the platform is supported", (done) => {
    process.setPlatform(SUPPORTED_PLATFORMS.WIN32);

    nockExec(`echo "${str}" | ${COPY.WIN32}`).reply(0);

    copyToClipboard(str).then((result) => {
      expect(result).toEqual(str);
      done();
    });
  });

  it("should throw an error if the copy command does not work", (done) => {
    const errorMessage = "Something went wrong.";
    process.setPlatform(SUPPORTED_PLATFORMS.WIN32);

    nockExec(`echo "${str}" | ${COPY.WIN32}`)
      .err(errorMessage)
      .reply(0);

    copyToClipboard(str).catch((error) => {
      expect(error).toBeDefined();
      expect(error.message).toEqual(errorMessage);
      done();
    });
  });
});
