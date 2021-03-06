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

  it('returns Fizz for number 3', () => {
    const value = FizzBuzz.getValueFor(3)

    expect(value).toBe('Fizz')
  })

  it('returns 4 for number 4', () => {
    const value = FizzBuzz.getValueFor(4)

    expect(value).toBe('4')
  })

  it('returns Buzz for number 5', () => {
    const value = FizzBuzz.getValueFor(5)

    expect(value).toBe('Buzz')
  })

  it('returns Fizz for number 6', () => {
    const value = FizzBuzz.getValueFor(6)

    expect(value).toBe('Fizz')
  })

  it('returns Fizz for number 9', () => {
    const value = FizzBuzz.getValueFor(9)

    expect(value).toBe('Fizz')
  })

  it('returns Buzz for number 10', () => {
    const value = FizzBuzz.getValueFor(10)

    expect(value).toBe('Buzz')
  })

  it('returns Buzz for number 15', () => {
    const value = FizzBuzz.getValueFor(15)

    expect(value).toBe('Fizz-Buzz')
  })

  it('returns Buzz for number 30', () => {
    const value = FizzBuzz.getValueFor(30)

    expect(value).toBe('Fizz-Buzz')
  })

  
})
