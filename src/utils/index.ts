import { PassOption } from "@/types";
import getChar from "./getChar";
import getCharTypes from "./getCharTypes";
import { getSumCode, generateNum, getTypes } from "./helper";

export function strengthen(
  base: string,
  key: Array<string>,
  length: number,
  option: PassOption
) {
  const charTypes = getCharTypes(base, length, option);
  const filteredKey = key.filter((str) => str != "")
  const result = getResult(charTypes, filteredKey);

  return result;
}

const getResult = (charTypes: Array<string>, key: Array<string>) => {
  let result = Array(charTypes.length).fill(0);

  key.forEach((str, idx) => {
    if (str != "") {
      let num = getSumCode(str);

      for (let i = 0; i < charTypes.length; i++) {
        result[i] += num * ++idx; // multiply with ++idx so the order of the keys matters
        num = generateNum(num);
      }
    }
  });

  result = result.map((element, i) => getChar(element, charTypes[i]));

  return result.join("");
};

export { getTypes };
