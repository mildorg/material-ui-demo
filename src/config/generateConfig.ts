export function generateConfig() {
  return {
    server: "http://localhost",
    port: 8080,
    domain: "localhost",
    timer: "20191",
  };
}

export function generateAnotherConfig() {
  return {
    server: "http://localhost",
    port: 8080,
    domain: "localhost",
    timer: new Date(),
  };
}
