/**
 * @returns  True if the runtime is NodeJS.
 */
const isNode = (): boolean => {
  return typeof module !== "undefined" && !!module.exports;
};

export default isNode;
