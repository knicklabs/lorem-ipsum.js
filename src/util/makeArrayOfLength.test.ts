import { makeArrayOfLength } from ".";

describe("makeArrayOfLength", () => {
  test("When given no argument, it should return an array of zero size", () => {
    expect(makeArrayOfLength()).toEqual([]);
  });

  test("It should return an array of the given size", () => {
    const sizes = [1, 5, 7, 100];
    sizes.forEach((size, index) => {
      expect(makeArrayOfLength(size).length).toEqual(sizes[index]);
    });
  });

  test("Each element in the array should be the index", () => {
    const results = makeArrayOfLength(5);
    results.forEach((result, index) => {
      expect(result).toEqual(index);
    });
  });
});
