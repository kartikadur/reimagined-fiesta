
type romansDictType = { [key: string]: number };

export const romansDict: romansDictType = {
  "M": 1000,
  "CM": 900,
  "D": 500,
  "CD": 400,
  "C": 100,
  "XC": 90,
  "L": 50,
  "XL": 40,
  "X": 10,
  "IX": 9,
  "V": 5,
  "IV": 4,
  "I": 1,
}

const generateRtoA = (table: romansDictType): Function => {
  return (roman: string): number => {
    const rsplit = roman.split('');
    let result: number = 0;
    for (let i = 0; i < rsplit.length - 1; i++) {
      if (table[rsplit[i]] >= table[rsplit[i + 1]]) {
        result += table[rsplit[i]]
      } else {
        result -= table[rsplit[i]]
      }

    }
    result += table[rsplit[rsplit.length - 1]]

    return result
  }
}

export const romanToArabic = generateRtoA(romansDict);

const generateAtoR = (table: romansDictType): Function => {
  return (arabic: number): string => {
    let result: string = "";
    let a;
    let num = arabic;
    for (let key in table) {
      a = Math.floor(num / table[key])
      if (a >= 0) {
        result += key.repeat(a)
      }
      num %= table[key];
    }
    return result
  }
}

export const arabicToRoman = generateAtoR(romansDict);