/* utils */
import getSpaceData from "../utils/getSpaceData";

/* styles */
import "../globals.css";

/* components */
import CrewPageContent from "./CrewPageContent";

/* typescript */
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crew",
  description: "Meet all the crew members of Space Tourism",
}

export default async function CrewPage() {
   const crew = ((await getSpaceData()).crew);

   return (
      <CrewPageContent crew={crew} />
   )
}