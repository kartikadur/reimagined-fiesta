import { romanToArabic, romansDict, arabicToRoman } from "./conversion"

test("should convert roman numeral to arabic digit", () => {
  Object.keys(romansDict).forEach(k => {
    expect(romanToArabic(k)).toBe(romansDict[k])
  })
})

test("should convert arabic digit to roman numeral", () => {
  Object.keys(romansDict).forEach(k => {
    expect(arabicToRoman(romansDict[k])).toBe(k)
  })
})

test("should return correct value when lower numeral precedes higher numeral", () => {
  expect(romanToArabic("IV")).toBe(4);
  expect(romanToArabic("IX")).toBe(9);
  expect(romanToArabic("XL")).toBe(40);
  expect(romanToArabic("XC")).toBe(90);
  expect(romanToArabic("CD")).toBe(400);
  expect(romanToArabic("CM")).toBe(900);
  expect(romanToArabic("CIV")).toBe(104);
  expect(romanToArabic("MCDIX")).toBe(1409);
  expect(romanToArabic("XLII")).toBe(42);
})

test("should return correct values for non multples of 5", () => {
  expect(arabicToRoman(456)).toBe("CDLVI");
  expect(arabicToRoman(99)).toBe("XCIX");
  expect(arabicToRoman(988)).toBe("CMLXXXVIII");
  expect(arabicToRoman(104)).toBe("CIV");
  expect(arabicToRoman(1409)).toBe("MCDIX");
  expect(arabicToRoman(1904)).toBe("MCMIV");
  expect(arabicToRoman(3649)).toBe("MMMDCXLIX");
})

