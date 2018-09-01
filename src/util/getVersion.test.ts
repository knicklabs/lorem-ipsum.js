import fs from "fs";
import getVersion from "./getVersion";

const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));

describe("getVersion", () => {
  test("Returns the version from package.json", () => {
    expect(getVersion()).toEqual(pkg.version);
  });
});
