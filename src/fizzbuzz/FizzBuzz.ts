export default class FizzBuzz {
  static getValueFor(number: number) {
    if(number === 3) return 'Fizz'
    return number.toString();
  }
}
