/* typescript */
import { Metadata } from "next";

/* styles */
import "../globals.css";

/* components */
import DestinationPageContent from "./DestinationPageContent";

/* utils */
import getSpaceData from "../utils/getSpaceData";

export const metadata: Metadata = {
  title: "Destinations | Space Tourism",
  description: "All the destinations we offer, including the Moon, Mars, Europa and Titan",
};

async function getDestinations() {
  return (await getSpaceData()).destinations;
}

export default async function DestinationPage() {
  const destinations = await getDestinations();

  return <DestinationPageContent destinations={destinations} />;
}
