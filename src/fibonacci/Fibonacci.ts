export default class Fibonacci {
  private static values: {[a: number]: number} = {
    1: 0,
    2: 1,
  }

  private static get(position: number) {
    let value = Fibonacci.values[position];

    if (value === undefined) {
      value = Fibonacci.calculate(position)
      Fibonacci.save(position, value)
    }

    return value;
  }

  private static save(position: number, value: number) {
    Fibonacci.values[position] = value
  }

  private static calculate(position: number) {
    const nth_1_Position = position - 1;
    const nth_2_Position = position - 2;
    
    const nth_1_Value = Fibonacci.get(nth_1_Position);
    const nth_2_Value = Fibonacci.get(nth_2_Position);

    return nth_1_Value + nth_2_Value
  }

  static at(position: number) {
    if (position <= 2) return Fibonacci.get(position);
    else {
      return Fibonacci.calculate(position)
    }
  }
}
