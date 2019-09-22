import StatsCalculator from '../StatsCalculator';

describe('Stats Calculator', () => {
  it('should return 1 as the minimum value from given values', () => {
    const minimumValue = StatsCalculator.minimum([1, 2])

    expect(minimumValue).toBe(1)
  })

  it('should return 2 as the minimum value from given values', () => {
    const minimumValue = StatsCalculator.minimum([2, 3])

    expect(minimumValue).toBe(2)
  })
})
