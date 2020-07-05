import Util from "./util";

export class Calculate {
  public number: number;

  constructor(number: number) {
    this.number = number;
  }

  addOne() {
    this.number += 1;
  }

  addTwo() {
    this.number += 2;
  }

  minusOne() {
    this.number -= 1;
  }

  minusTwo() {
    this.number -= 2;
  }
}

export function demoUtil(): void {
  const util = new Util();
  util.a();
  util.b();
}
