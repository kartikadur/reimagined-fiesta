import { arabicToRoman, romanToArabic } from "./conversion"

export const add = (num1: string, num2: string) => {
  return arabicToRoman(romanToArabic(num1) + romanToArabic(num2))
}

export const sub = (num1: string, num2: string) => {
  return gt(num1, num2) ? arabicToRoman(romanToArabic(num1) - romanToArabic(num2)) : false;
}

export const mul = (num1: string, num2: string) => {
  return arabicToRoman(romanToArabic(num1) * romanToArabic(num2))
}

export const gt = (num1: string, num2: string) => {
  return romanToArabic(num1) > romanToArabic(num2)
}

