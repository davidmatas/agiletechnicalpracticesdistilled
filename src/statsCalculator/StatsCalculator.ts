export default class StatsCalculator {
  private values: Array<number>;
  constructor(values: Array<number>) {
    this.values = values;
  }
  static insert(values: Array<number>) {
    return new StatsCalculator(values)
  }
  minimum() {
    return this.values.sort((a, b) => b - a).pop()
  }

  maximum() {
    return this.values.sort((a, b) => a - b).pop()
  }

  numberOfElements() {
    return this.values.length;
  }

  average() {
    const sum = this.values.reduce((prev, value) => prev + value)
    const numberOfElements = this.numberOfElements();

    return sum / numberOfElements;
  }
}
