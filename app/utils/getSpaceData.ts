import { promises as fs } from "fs";
import { SpaceData } from "../typescript/interfaces";

export default async function getSpaceData() {
  const content = await fs.readFile(process.cwd() + "/app/data.json", "utf8");
  const data: SpaceData = await JSON.parse(content);

  return data;
}
