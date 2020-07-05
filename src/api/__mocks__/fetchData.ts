export function fetchData(): Promise<any> {
  return new Promise((resolve, reject) => {
    resolve(`(function () {return "123"}())`);
    reject("error");
  });
}
