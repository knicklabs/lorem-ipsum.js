import { makeArrayOfStrings } from ".";

describe("makeArrayOfStrings", () => {
  const makeStr = () => "string";

  test("Given no length, it will return an empty array", () => {
    expect(makeArrayOfStrings(0, makeStr)).toEqual([]);
  });

  test(`Given a function to make a string, it will return an array with
     the generated string repeated "x" times.`, () => {
    const results = makeArrayOfStrings(5, makeStr);
    expect(results).toHaveLength(5);
    results.forEach((result) => {
      expect(result).toEqual("string");
    });
  });
});
