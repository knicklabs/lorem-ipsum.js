import isNode from "./isNode";

describe("isNode", () => {
  test("should return true if executing in NodeJS", () => {
    expect(isNode()).toEqual(true);
  });
});
