import getSpaceData from "../utils/getSpaceData";
import TechnologyPageContent from "./TechnologyPageContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "All the technologies space tourism offers including a launch vehicle, a spaceport, and a space capsule",
};

export default async function TechnologyPage() {
  const technologies = (await getSpaceData()).technologies;

  return <TechnologyPageContent technologies={technologies} />;
}
