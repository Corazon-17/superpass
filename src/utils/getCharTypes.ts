import { PassOption } from "@/types";
import { getSumCode, generateNum, getTypes } from "./helper";

/**
 * Get list of type for each character with a specified length.
 * @param base
 * @param types
 * @param length
 * @returns
 */
export default function getCharTypes(base: string, length: number, option: PassOption) {
  const types = getTypes(option);

  let charTypes = [];
  let num = generateNum(getSumCode(base));

  for (let i = 0; i < length; i++) {
    const idx = num % types.length;
    charTypes.push(types[idx]);
    num = generateNum(num);
  }

  return charTypes;
}


