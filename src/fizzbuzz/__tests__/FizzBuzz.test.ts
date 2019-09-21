import FizzBuzz from '../FizzBuzz';


describe('Fizz Buzz', () => {
  it('returns 1 for number 1', () => {
    const value = FizzBuzz.getValueFor(1)

    expect(value).toBe('1')
  })

  it('returns 2 for number 2', () => {
    const value = FizzBuzz.getValueFor(2)

    expect(value).toBe('2')
  })

  it('returns 4 for number 4', () => {
    const value = FizzBuzz.getValueFor(4)

    expect(value).toBe('4')
  })
})
