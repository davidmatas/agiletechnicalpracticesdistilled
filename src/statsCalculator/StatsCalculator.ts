export default class StatsCalculator {
  static minimum(values: Array<number>) {
    let minimum;
    for (const number of values) {
      if (minimum === undefined) minimum = number;
      if (number < minimum) minimum = number;
    }
    return minimum;
  }
}
