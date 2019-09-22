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

  it('number at position 5 is 3', () => {
    const position = 5;

    const number = Fibonacci.at(position)

    expect(number).toBe(3)
  })

  it('number at position 6 is 5', () => {
    const position = 6;

    const number = Fibonacci.at(position)

    expect(number).toBe(5)
  })

  it('number at position 7 is 8', () => {
    const position = 7;

    const number = Fibonacci.at(position)

    expect(number).toBe(8)
  })

  it('number at position 8 is 13', () => {
    const position = 8;

    const number = Fibonacci.at(position)

    expect(number).toBe(13)
  })

  it('number at position 9 is 21', () => {
    const position = 9;

    const number = Fibonacci.at(position)

    expect(number).toBe(21)
  })
})
