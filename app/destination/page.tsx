import { promises as fs } from "fs";

import { Metadata } from "next";

/* styles */
import "../globals.css";

/* typescript */
import { SpaceData } from "../typescript/interfaces";

/* components */
import DestinationPageContent from "./DestinationPageContent";

/* utils */
import { getSpaceData } from "../utils";

export const metadata: Metadata = {
  title: "Destination Page",
  description: "All the destinations we offer, including the Moon, Mars, Europa and Titan",
};

async function getDestinations() {
  return (await getSpaceData()).destinations;
}

export default async function DestinationPage() {
  const destinations = await getDestinations();

  return <DestinationPageContent destinations={destinations} />;
}
