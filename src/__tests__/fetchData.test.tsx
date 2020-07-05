import { fetchData } from "../api/fetchData";
jest.mock("../api/fetchData");

describe("jest 测试异步请求", () => {
  /* 
  test("回调函数的情况,测试返回数据为{success:true}", (done) => {
    fetchData((data) => {
      expect(data).toEqual({ success: true });
      done();
    });
  }); */
  /* 
  test("测试返回值是Promise的情况", () => {
    return fetchData().then((data) => {
      expect(data).toEqual({ success: true });
    });
  }); */
  /* test("测试返回404的情况", () => {
    expect.assertions(1);
    return fetchData().catch((e) => {
      console.log(e.toString());
      expect(e.toString().includes("404")).toBe(true);
    });
  }); */
  /* 
  test("测试返回 {success:true} ", async () => {
    return await expect(fetchData()).resolves.toEqual({ success: true });
  }); */
  /* test("测试抛出异常", async () => {
    return await expect(fetchData()).rejects.toThrow();
  }); */
  /* test("测试返回 {success:true} ", async () => {
    const response = await fetchData();
    expect(response).toEqual({ success: true });
  }); */
  /* test("测试抛出异常", async () => {
    expect.assertions(1);
    try {
      await fetchData();
    } catch (e) {
      expect(e.toString()).toMatch(/404/);
    }
  }); */

  test("测试异步的fetchData", async () => {
    const data = await fetchData();
    console.log(data);
    expect(eval(data as string)).toEqual("123");
  });
});
