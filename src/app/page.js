import React from "react";
import Censored from "./Censored/Censored";
import HitCounter from "./HitCounter";

function Home() {
  return (
    <main>
      <h1>Hello Next!</h1>
      Welcome! You are visitor number{" "}
      <Censored>
        <HitCounter />
      </Censored>
      .
    </main>
  );
}

export default Home;
