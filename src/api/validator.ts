const r = new RegExp(/^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/);

export const validateNumeral = async (value: string): Promise<boolean> => {
  return await new Promise(res => {
    return setTimeout(() => {
      const valArr = value.split(/[+\-×]/);
      return res(valArr.every(x => r.test(x)));
    }, 500)
  })
}