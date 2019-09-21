export default class FizzBuzz {
  static getValueFor(number: number) {
    if(number % 3 === 0) return 'Fizz'
    return number.toString();
  }
}
