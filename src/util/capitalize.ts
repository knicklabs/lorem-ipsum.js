/**
 * @param str  A string that may or may not be capitalized.
 * @returns    A capitalized string.
 */
const capitalize = (str: string): string => {
  const trimmed = str.trim();
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
};

export default capitalize;
