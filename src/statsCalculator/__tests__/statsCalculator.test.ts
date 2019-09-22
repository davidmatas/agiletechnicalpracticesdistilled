import StatsCalculator from '../StatsCalculator';

describe('StatsCalculator', () => {
  it.each`
    value               | expected
    ${[1, 2]}           | ${1}
    ${[2, 3]}           | ${2}
    ${[-2, 3, 5, 0, 8]} | ${-2}
  `('retuns $expected as minimum for values $value', ({value, expected}) => {
    const minimum = StatsCalculator.insert(value).minimum();
    expect(minimum).toBe(expected);
  });

  it.each`
    value               | expected
    ${[1, 2]}           | ${2}
    ${[2, 3]}           | ${3}
    ${[-2, 3, 5, 0, 8]} | ${8}
  `('retuns $expected as maximum for values $value', ({value, expected}) => {
    const maximum = StatsCalculator.insert(value).maximum();
    expect(maximum).toBe(expected);
  });

  it.each`
    value               | expected
    ${[1, 2]}           | ${2}
    ${[2, 3, 4]}        | ${3}
    ${[-2, 3, 5, 0, 8]} | ${5}
  `('retuns $expected as number of elements for values $value', ({value, expected}) => {
    const elements = StatsCalculator.insert(value).numberOfElements();
    expect(elements).toBe(expected);
  });

  it.each`
    value                     | expected
    ${[2, 2]}                 | ${2}
    ${[4, 4, 4]}              | ${4}
    ${[6, 9, 15, -2, 92, 11]} | ${21.833333333333332}
  `('retuns $expected as average for values $value', ({value, expected}) => {
    const average = StatsCalculator.insert(value).average();
    expect(average).toBe(expected);
  });
})
