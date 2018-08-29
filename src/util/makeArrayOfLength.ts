/**
 * @param length Length "x".
 * @returns      An array of indexes of length "x".
 */
const makeArrayOfLength = (length: number): number[] => {
  return Array.apply(null, Array(length)).map(
    (item: void, index: number): number => index,
  );
};

export default makeArrayOfLength;
