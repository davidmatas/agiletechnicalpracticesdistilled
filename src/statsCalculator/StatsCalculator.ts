export default class StatsCalculator {
  static minimum(values: Array<number>) {
    let minimum;

    for (const number of values) {
      if (minimum === undefined || number < minimum) minimum = number;
    }

    return minimum;
  }

  static maximum(values: Array<number>) {
    let maximum;

    for (const number of values) {
      if (maximum === undefined || number > maximum) maximum = number;
    }

    return maximum;
  }
}
