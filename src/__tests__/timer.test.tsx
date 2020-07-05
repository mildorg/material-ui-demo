import { timer } from "../custom";

describe("测试定时器", () => {
  let fn: Function;
  beforeEach(() => {
    jest.useFakeTimers();
    fn = jest.fn();
    timer(fn);
  });

  test("should timer called correct times", () => {
    jest.advanceTimersByTime(3000);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  test("should timer called correct times two", () => {
    jest.advanceTimersByTime(3000);
    expect(fn).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(3000);
    expect(fn).toHaveBeenCalledTimes(2);
  });
});
