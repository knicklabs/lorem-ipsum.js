import { isReactNative } from "./";

describe("isReactNative", () => {
  // @ts-ignore
  const cachedNavigator = global.navigator;

  const setNavigator = (obj: any) => {
    // @ts-ignore
    global.navigator = obj;
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
