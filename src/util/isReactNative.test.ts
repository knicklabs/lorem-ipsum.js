import { isReactNative } from "./";

describe("isReactNative", () => {
  const cachedProduct = navigator.product;

  const setNavigator = (product?: any) => {
    Object.defineProperty(navigator, "product", {
      value: product,
      writable: true,
    });
  };

  afterEach(() => {
    setNavigator(cachedProduct);
  });

  test("should return false if not in React Native", () => {
    setNavigator(undefined);
    expect(isReactNative()).toEqual(false);
  });

  test("should return true if in React Native", () => {
    setNavigator("ReactNative");
    expect(isReactNative()).toEqual(true);
  });
});
