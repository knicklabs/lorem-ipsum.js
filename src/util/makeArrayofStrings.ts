import { makeArrayOfLength } from ".";
/**
 * @param length  Length "x".
 * @returns       An array of strings of length "x".
 */
const makeArrayOfStrings = (
  length: number = 0,
  makeString: () => string,
): string[] => {
  const arr = makeArrayOfLength(length);
  return arr.map(() => makeString());
};

export default makeArrayOfStrings;
