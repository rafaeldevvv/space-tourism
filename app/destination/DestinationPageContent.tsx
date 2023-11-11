"use client";

/* styles */
import "../globals.css";
import styles from "./destination.module.css";
import utilities from "../shared-css/utility-classes.module.css";
import components from "../shared-css/components.module.css";

/* utils */
import classes from "../utils/classes";

/* typescript */
import { Destination } from "../typescript/interfaces";

/* components */
import Image from "next/image";
import { Tab, TabList, TabPanel } from "../components/TabbedInterface";

/* react */
import { useState } from "react";
import getIdFrom from "../utils/getIdFrom";

export default function DestinationsTabs({
  destinations,
}: {
  destinations: Destination[];
}) {
  const [selectedDestinationIndex, setSelectedDestinationIndex] = useState(0);

  const names = destinations.map((d) => d.name);
  const namesIds = destinations.map((d) =>
    getIdFrom(d.name, { transform: "lowercase" })
  );
  const descriptionsIds = destinations.map((d) => getIdFrom(d.description, {}));

  const selectedDestination = destinations.find(
    (_, i) => i === selectedDestinationIndex
  )!;

  return (
    <div>
      <div className={utilities.container}>
        <h1 className={classes(utilities.numberedTitle)}>
          <span>01</span> Pick your destination
        </h1>
      </div>
      <div className={classes(utilities.gridContainer)}>
        <div>
          <Image
            src={selectedDestination.images.png}
            alt={selectedDestination.imageAlt}
            width="445"
            height="445"
          />
        </div>
        <div>
          <TabList
            className={classes(
              components.underlineIndicators,
              utilities.flex,
              styles.tablist
            )}
            label="Destinations"
            onArrowDown={(key) => {
              if (key === "ArrowRight") {
                setSelectedDestinationIndex((i) =>
                  i === destinations.length - 1 ? 0 : i + 1
                );
              } else if (key === "ArrowLeft") {
                setSelectedDestinationIndex((i) =>
                  i === 0 ? destinations.length - 1 : i - 1
                );
              }
            }}
            onHomeDown={() => {
              setSelectedDestinationIndex(0);
            }}
            onEndDown={() => {
              setSelectedDestinationIndex(destinations.length - 1);
            }}
          >
            {names.map((name, index) => {
              return (
                <Tab
                  key={name}
                  active={index === selectedDestinationIndex}
                  pos={index + 1}
                  controls={descriptionsIds[index]}
                  className={classes(
                    styles.tab,
                    utilities.textWhite,
                    utilities.fs300
                  )}
                  id={namesIds[index]}
                  onClick={() => setSelectedDestinationIndex(index)}
                >
                  {name}
                </Tab>
              );
            })}
          </TabList>
          {destinations.map((d, i) => {
            return (
              <TabPanel
                key={d.name}
                id={descriptionsIds[i]}
                labelledBy={namesIds[i]}
                className={styles.utilities}
                active={selectedDestination.name === d.name}
              >
                <DestiationInfo destination={d} />
              </TabPanel>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function InfoBlock({ title = "Title", info = "Info" }) {
  return (
    <section>
      <h3
        className={classes(
          utilities.uppercase,
          utilities.textLight,
          utilities.fs200,
          utilities.letterSpacing3,
          utilities.ffSansCond
        )}
      >
        {title}
      </h3>
      <p
        className={classes(
          utilities.uppercase,
          utilities.ffSerif,
          styles.fs550
        )}
      >
        {info}
      </p>
    </section>
  );
}

export function DestiationInfo({ destination }: { destination: Destination }) {
  return (
    <article>
      <h2
        className={classes(
          utilities.fs800,
          utilities.ffSerif,
          utilities.uppercase
        )}
      >
        {destination.name}
      </h2>
      <p className={classes(utilities.textLight)}>{destination.description}</p>

      <hr className={styles.separator} />

      <div className={classes(utilities.flex, styles.infoBlocks)}>
        <InfoBlock title="Avg. Distance" info={destination.distance} />
        <InfoBlock title="Est. travel time" info={destination.travel} />
      </div>
    </article>
  );
}
