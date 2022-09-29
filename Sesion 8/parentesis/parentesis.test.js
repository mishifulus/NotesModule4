const { parentesis } = require('./parentesis');

describe('Final Challenge', () => {
  test("Empty sequence returns 0", () => {
    expect(parentesis("")).toBe(0);
  });

  test('Balanced sequence returns 0', () => {
    expect(parentesis("()")).toBe(0);
    expect(parentesis("()()()()()()()")).toBe(0);
    expect(parentesis("(())")).toBe(0);
    expect(parentesis("(((((())))))")).toBe(0);
    expect(parentesis("(())((()()))")).toBe(0);
  });

  test('Missing ) in sequence', () => {
    expect(parentesis("(()(")).toBe(2);
    expect(parentesis("()()(((((")).toBe(5);
  });

  test('Missing ( in sequence', () => {
    expect(parentesis('))(')).toBe(3);
    expect(parentesis('(())))(')).toBe(3);
    expect(parentesis('(()))(')).toBe(2);
    expect(parentesis(')()()(')).toBe(2);
  });
});