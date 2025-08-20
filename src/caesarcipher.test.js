import caesarCipher from "./caesarcipher"
test('testing caesar cipher',() =>{
    //expect(caesarCipher('xyz', 3)).toBe('abc')
    expect(caesarCipher('a', 1)).toBe('b')
    expect(caesarCipher('A', 1)).toBe('B')
    expect(caesarCipher('2', 1)).toBe('2')
    expect(caesarCipher('xyz', 3)).toBe('abc')
    //caesarCipher('HeLLo', 3) should return 'KhOOr'.
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr')
    //caesarCipher('Hello, World!', 3) should return 'Khoor, Zruog!'
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')

})