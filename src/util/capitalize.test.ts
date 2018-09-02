import { capitalize } from ".";

describe("capitalize", () => {
  test(`
    Given a string with a lowercase first letter, it should return a new string
    with the first letter upcased.
  `, () => {
    expect(capitalize("dog")).toEqual("Dog");
  });

  test(`
    Given a string with an uppercase first letter, it should return the same
    string.
  `, () => {
    expect(capitalize("Dog")).toEqual("Dog");
    expect(capitalize("DOG")).toEqual("DOG");
  });

  test("Given an empty string, it should return an empty string", () => {
    expect(capitalize("")).toEqual("");
  });
});
