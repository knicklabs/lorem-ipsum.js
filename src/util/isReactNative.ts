/**
 * @returns  True if runtime is ReactNative.
 */
const isReactNative = (): boolean => {
  return (
    typeof navigator !== "undefined" && navigator.product === "ReactNative"
  );
};

export default isReactNative;
