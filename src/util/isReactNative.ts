/**
 * @returns  True if runtime is ReactNative.
 */
const isReactNative = (): boolean => {
  return (
    typeof navigator !== "undefined" && typeof navigator.product !== "undefined"
  );
};

export default isReactNative;
