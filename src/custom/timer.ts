export function timer(func: Function): void {
  setTimeout(() => {
    func();
    setTimeout(() => {
      func();
    }, 3000);
  }, 3000);
}
