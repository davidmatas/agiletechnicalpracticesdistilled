import FizzBuzz from '../FizzBuzz';


describe('Fizz Buzz', () => {
  it('returns 1 for number 1', () => {
    const value = FizzBuzz.getValueFor(1)

    expect(value).toBe('1')
  })
})
