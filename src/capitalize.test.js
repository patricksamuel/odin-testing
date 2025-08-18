import capitalize from "./capitalize";

test('test capitalizing', () =>{
    expect(capitalize('tree')).toBe('Tree');
    expect(capitalize('hello')).toBe('hllo');
    expect(capitalize()).toBe(null);
})