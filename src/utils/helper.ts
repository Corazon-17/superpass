import { PassOption } from "@/types";

/**
 * Get sum of ASCII code from each character in a string.
 * @param str 
 * @returns 
 */
export const getSumCode = (str: string) => {
  let sumCode = 0;
  for (const char of str) {
    sumCode += char.charCodeAt(0);
  }

  return sumCode;
};

/**
 * Generate random number with seed.
 * Reference: https://stackoverflow.com/a/19303725
 * @param seed
 * @returns
 */
export const random = (seed: number) => {
  let result = Math.sin(++seed) * 10000 - Math.floor(seed);

  return Math.round(Math.abs(result));
};

/**
 * Get list of desired character types in the password.
 * @param option 
 * @returns 
 */
export const getTypes = (option: PassOption) => {
  type ObjectKey = keyof typeof option;

  // Return only keys with value = true
  return Object.keys(option).filter((key) => option[key as ObjectKey]);
};