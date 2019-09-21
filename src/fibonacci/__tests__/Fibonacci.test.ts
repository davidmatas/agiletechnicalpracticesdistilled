import Fibonacci from '../Fibonacci';

describe('Fibonacci', () => {
  it('number at position 1 is 0', () => {
    const position = 1;

    const number = Fibonacci.at(position)

    expect(number).toBe(0)
  })

  it('number at position 2 is 1', () => {
    const position = 2;

    const number = Fibonacci.at(position)

    expect(number).toBe(1)
  })

  it('number at position 3 is 1', () => {
    const position = 3;

    const number = Fibonacci.at(position)

    expect(number).toBe(1)
  })

  it('number at position 4 is 2', () => {
    const position = 4;

    const number = Fibonacci.at(position)

    expect(number).toBe(2)
  })
})
