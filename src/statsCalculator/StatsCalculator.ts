export default class StatsCalculator {
  static minimum(values: Array<number>) {
    return values.sort((a, b) => b - a).pop()
  }

  static maximum(values: Array<number>) {
    return values.sort((a, b) => a - b).pop()
  }

  static numberOfElements(values: Array<number>) {
    return values.length;
  }

  static average(values: Array<number>) {
    const sum = values.reduce((prev, value) => prev + value)
    const numberOfElements = StatsCalculator.numberOfElements(values);
    
    return sum / numberOfElements;
  }
}
