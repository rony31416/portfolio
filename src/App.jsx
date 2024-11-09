import React from "react";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <div id="main">
        <Header />
        <Page1 />
        <Page2 />
      </div>
    </>
  );
};

export default App;
