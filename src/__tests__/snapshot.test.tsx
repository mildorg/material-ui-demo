import { generateConfig, generateAnotherConfig } from "../config";

describe("jest 快照测试", () => {
  test("测试 generateConfig", () => {
    expect(generateConfig()).toMatchSnapshot();
  });

  test("测试generateAnotherConfig", () => {
    expect(generateAnotherConfig()).toMatchSnapshot({
      timer: expect.any(Date),
    });
  });
});
