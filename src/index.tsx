import React from "react";
import { render } from "react-dom";
import { Header, Footer, Content } from "./components/layout";

const App = () => {
  return (
    <div>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
};

render(<App />, document.getElementById("root"));
