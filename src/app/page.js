import React from "react";
import { readFile, writeFile } from "../helpers/file-helpers";

const DB_PATH = "/src/database.json";

function Home() {
  let { hits } = JSON.parse(readFile(DB_PATH));
  hits++;
  writeFile(DB_PATH, JSON.stringify({ hits }));

  return (
    <main>
      <h1>Hello Next!</h1>
      Welcome! You are visitor number {hits}.
    </main>
  );
}

export default Home;
