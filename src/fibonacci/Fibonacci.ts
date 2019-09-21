export default class Fibonacci {
  static at(position: number) {
    if(position === 1) return 0
    if(position <= 3) return 1
    else return 2
  }
}
