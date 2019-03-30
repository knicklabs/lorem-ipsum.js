import { version } from "../../../package.json";

/**
 * @returns  The package version.
 */
const getVersion = (): string => version;

export default getVersion;
