import Calculator from "./calculator"
const calculator = new Calculator

test('testign calculator', ()=>{
    expect(calculator.add(1,2)).toBe(3)
    expect(calculator.substract(1,2)).toBe(-1)
    expect(calculator.divide(1,2)).toBe(0.5)
    expect(calculator.multiply(1,2)).toBe(2)

})