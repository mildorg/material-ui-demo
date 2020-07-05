import { demoUtil } from "../custom";
import Util from "../custom/util";
jest.mock("../custom/util");

describe("测试类", () => {
  test("测试 demoUtil", () => {
    demoUtil();
    expect(Util).toHaveBeenCalled();
    expect(Util.mock.instances[0].a).toHaveBeenCalled();
    expect(Util.mock.instances[0].b).toHaveBeenCalled();
    console.log(Util.mock);
  });
});
