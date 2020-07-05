import { mockFunc } from "../custom";

describe("测试jest中的mock函数", () => {
  /* test("测试模拟函数被正确的调用", () => {
    const fn = jest.fn();
    mockFunc(fn);
    expect(fn).toBeCalledTimes(1);
  }); */
  test("测试模拟函数被正确的调用", () => {
    const fn = jest.fn((callback) => callback("deli"));
    fn.mockReturnValue("mock");
    mockFunc(fn);
    // expect(fn).toBeCalledTimes(1);
    expect(fn.mock.results[0].value).toBe("mock");
    console.log("fn()", fn.mock);
  });
});
