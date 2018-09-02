import { isReactNative } from "./";

describe("isReactNative", () => {
  const cachedNavigator: any = (global as any).navigator;

  const setNavigator = (navigator?: any) => {
    Object.defineProperty(global, "navigator", {
      value: navigator,
      writable: true,
    });
  };

  afterEach(() => {
    setNavigator(cachedNavigator);
  });

  test("should return false if not in React Native", () => {
    setNavigator(undefined);
    expect(isReactNative()).toEqual(false);
  });

  test("should return true if in React Native", () => {
    setNavigator({ product: "ReactNative" });
    expect(isReactNative()).toEqual(true);
  });
});
