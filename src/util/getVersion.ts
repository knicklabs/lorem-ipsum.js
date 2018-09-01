const getVersion = (): string => {
  return process.env.npm_package_version || "unknown";
};

export default getVersion;
