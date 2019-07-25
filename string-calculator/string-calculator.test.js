const stringCalculator = require('./string-calculator');

test('"" = 0', () => {
  expect(stringCalculator('')).toBe(0);
});
