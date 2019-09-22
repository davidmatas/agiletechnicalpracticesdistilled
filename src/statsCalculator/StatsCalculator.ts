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
}
