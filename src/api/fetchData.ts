import axios from "axios";

/* export function fetchData(fn: (data: any) => any): void {
  axios
    .get("http://www.dell-lee.com/react/api/demo.json")
    .then((response) => response.data)
    .then(fn);
}
 */
/* export function fetchData(): Promise<any> {
  return axios
    .get("http://www.dell-lee.com/react/api/demo1.json")
    .then((Response) => Response.data);
}
 */

export async function fetchData(): Promise<any> {
  return await axios.get("./").then((res) => res.data);
}

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
`(function () {
  return "123"
}())`;
