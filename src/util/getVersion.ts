import fs from "fs";

/**
 * @returns  The package version.
 */
const getVersion = (): string => {
  const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
  return pkg.version || "unknown";
};

export default getVersion;
