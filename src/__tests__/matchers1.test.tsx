describe("jest 匹配器", () => {
  //   test("测试相等", () => {
  //     const a = { one: "1" };
  //     expect(a).toBe({ one: "1" });
  //   });
  // test("测试内容相等", () => {
  //     const a = { one: "1" };
  //     expect(a).toEqual({ one: "1" });
  //   });
  // test("测试内容相等", () => {
  //     const a = { one: "1" };
  //     expect(a).toEqual({ one: "1" });
  //   });
  //   test("toBeNull 匹配器", () => {
  //     const a = null;
  //     expect(a).toBeNull();
  //   });
  //   test("toBeUndefined 匹配器", () => {
  //     const a = undefined;
  //     expect(a).toBeUndefined();
  //   });
  //   test("toBeDefined 匹配器", () => {
  //     const a = 1;
  //     expect(a).toBeDefined();
  //   });
  //   test("not 匹配器", () => {
  //     const a = 1;
  //     expect(a).not.toBeUndefined();
  //   });
  //   number匹配器
  //   test("toBeGreaterThan 匹配器 ", () => {
  //     const count = 10;
  //     expect(count).toBeGreaterThan(9);
  //   });
  //   test("toBeGreaterThanOrEqual 匹配器 ", () => {
  //     const count = 10;
  //     expect(count).toBeGreaterThanOrEqual(10);
  //   });
  test("toBeLessThan 匹配器 ", () => {
    const count = 10;
    expect(count).toBeLessThan(11);
  });

  test("toBeLessThanOrEqual 匹配器 ", () => {
    const count = 10;
    expect(count).toBeLessThanOrEqual(11);
  });

  /* 异常匹配器 */
  function throwError() {
    throw new Error("this is a new error");
  }

  test("toThrow 匹配器 ", () => {
    expect(throwError).toThrow(/this is a new error/);
  });
});
