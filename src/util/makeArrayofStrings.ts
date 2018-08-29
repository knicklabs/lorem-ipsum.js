/**
 * @param length  Length "x".
 * @returns       An array of strings of length "x".
 */
const makeArrayOfStrings = (
  length: number,
  makeString: () => string,
): string[] => {
  let cursor = 0;
  const result = [];
  while (cursor < length) {
    result.push(makeString());
    cursor++;
  }
  return result;
};

export default makeArrayOfStrings;
