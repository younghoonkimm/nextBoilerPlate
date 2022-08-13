export const add = (a: number, b: number) => a + b;

it("test", () => {
  expect(add(3, 5)).toBe(8);
});
