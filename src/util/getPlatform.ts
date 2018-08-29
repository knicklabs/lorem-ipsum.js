/**
 * @returns  The process platform.
 * @throws
 */
const getPlatform = (): string => {
  if (!process || typeof process.platform !== "string") {
    throw new Error("Could not determine host operating system.");
  }
  return process.platform;
};

export default getPlatform;
