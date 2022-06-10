import makeArrayOfLength from "./makeArrayOfLength";
/**
 * @param length  Length "x".
 * @returns       An array of strings of length "x".
 */
const makeArrayOfStrings = (
  length: number,
  makeString: () => string,
): string[] => {
  const arr = makeArrayOfLength(length);
  return arr.map(() => makeString());
};

export default makeArrayOfStrings;
