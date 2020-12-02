import React from "react";
import { Header, SwipeBtns, TinderCards } from "../components";

const HomeContainer = () => {
  return (
    <div className="app">
      <Header />
      <TinderCards />
      <SwipeBtns />
    </div>
  );
};

export default HomeContainer;
