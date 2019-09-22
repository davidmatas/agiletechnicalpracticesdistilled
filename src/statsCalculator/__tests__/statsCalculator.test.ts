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

  it('should return -2 as the minimum value from given values', () => {
    const minimumValue = StatsCalculator.minimum([-2, 3, 5, 0, 8])

    expect(minimumValue).toBe(-2)
  })

  it('should return 1 as the maximum value from given values', () => {
    const minimumValue = StatsCalculator.maximum([0, 2])

    expect(minimumValue).toBe(2)
  })

  it('should return 5 as the maximum value from given values', () => {
    const minimumValue = StatsCalculator.maximum([1, 5])

    expect(minimumValue).toBe(5)
  })

  it('should return 15 as the maximum value from given values', () => {
    const minimumValue = StatsCalculator.maximum([1, 5, 7, 8, -2, 15])

    expect(minimumValue).toBe(15)
  })

  it('should return 2 as the number of elements in the sequence for the given value', () => {
    const elements = StatsCalculator.numberOfElements([1,2])

    expect(elements).toBe(2);
  })

  it('should return 3 as the number of elements in the sequence for the given value', () => {
    const elements = StatsCalculator.numberOfElements([1,2,3])

    expect(elements).toBe(3);
  })

  it('should return 2 as the average value for the given value', () => {
    const average = StatsCalculator.average([2, 2, 2, 2])

    expect(average).toBe(2)
  })

  it('should return 21.833333 as the average value for the given value', () => {
    const average = StatsCalculator.average([6, 9, 15, -2, 92, 11])

    expect(average).toBe(21.833333333333332)
  })
})
