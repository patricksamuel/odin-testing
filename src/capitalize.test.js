import capitalize from "./capitalize";

test('test capitalizing', () =>{
    expect(capitalize('tree')).toBe('Tree');
    expect(capitalize('hello')).toBe('hello');
    expect(capitalize()).toBe(null);
    expect(capitalize()).toBe(null);
})