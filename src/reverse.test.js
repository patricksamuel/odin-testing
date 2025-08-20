let strTest = 'hello'
import reverse from "./reverse"

test('testing reverse function',() =>{
    expect(reverse('hello')).toBe('olleh')
    expect(reverse('abcd')).toBe('dcba')
    expect(1+1).toBe(2)
    expect(strTest.length).toBe(5)

})