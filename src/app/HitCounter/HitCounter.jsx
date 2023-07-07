import { readFile, writeFile } from "../../helpers/file-helpers";

const DB_PATH = "/src/database.json";

export default function Counter({ children }) {
  let { hits } = JSON.parse(readFile(DB_PATH));
  hits++;
  writeFile(DB_PATH, JSON.stringify({ hits }));

  return hits;
}
