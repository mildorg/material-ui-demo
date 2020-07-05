import { Calculate } from "../custom";

describe("测试jest中的钩子函数", () => {
  let calcu: Calculate;
  beforeAll(() => {
    console.log("beforAll 被调用了");
  });

  beforeEach(() => {
    console.log("beforEach 被调用了");
    calcu = new Calculate(0);
  });
  afterEach(() => {
    console.log("afterEacch 被调用了");
  });
  afterAll(() => {
    console.log("afterAll 被调用了");
  });
  test("测试Calculate类中的加法", () => {
    calcu.addOne();
    expect(calcu.number).toBe(1);
  });

  test("测试Calculate类中的减法", () => {
    // const num = new Calculate(0);
    calcu.minusOne();
    expect(calcu.number).toBe(-1);
  });
});
