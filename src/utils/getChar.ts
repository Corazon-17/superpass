// Reference: https://www.w3schools.com/charsets/ref_html_ascii.asp

export default function getChar(num: number, type: string) {
  const symbols = getSymbols();
  const code =
    type == "lower"
      ? 97 + (num % (122 - 97))
      : type == "upper"
      ? 65 + (num % (90 - 65))
      : type == "number"
      ? 48 + (num % (57 - 48))
      : symbols[num % symbols.length];

  return String.fromCharCode(code)
}

// Concatenate all symbol codes.
const getSymbols = () => {
  const group1 = Array.from(Array(47 - 32 + 1), (_, i) => i + 32);
  const group2 = Array.from(Array(64 - 58 + 1), (_, i) => i + 58);
  const group3 = Array.from(Array(96 - 91 + 1), (_, i) => i + 91);
  const group4 = Array.from(Array(126 - 123 + 1), (_, i) => i + 123);

  return group1.concat(group2, group3, group4);
};
