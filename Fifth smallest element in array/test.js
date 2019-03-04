const largest_fifth_no = require("./method1");

test("largest_fifth_no function exists", () => {
  expect(typeof largest_fifth_no).toEqual("function");
});

test("5th largest Number in 10 number", () => {
  expect(largest_fifth_no([9, 8, 3, 5, 1, 2, 7, 0, 4, 6])).toBe(4);
});

test("5th largest Number in 20 number", () => {
  expect(
    largest_fifth_no([
      12,
      1,
      45,
      74,
      13,
      15,
      2,
      41,
      22,
      0,
      19,
      17,
      31,
      56,
      4,
      26,
      87,
      61,
      99,
      10
    ]).toBe(10)
  );
});
