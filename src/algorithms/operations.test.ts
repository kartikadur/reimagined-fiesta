import { add, mul, sub } from "./operations"

test("I + I", () => {
  expect(add('I', 'I')).toBe('II')
})
test("CC + CC", () => {
  expect(add('CC', 'CC')).toBe('CD')
})

test("I * I", () => {
  expect(mul('I', 'I')).toBe('I')
})

test("C * L", () => {
  expect(mul('C', 'L')).toBe('MMMMM')
})

test("D - L", () => {
  expect(sub('D', 'L')).toBe('CDL')
})

test("DC - M", () => {
  expect(sub('DC', 'M')).toBe('Cannot compute')
})

test("I - I", () => {
  expect(sub('I', 'I')).toBe('Cannot compute')
})
