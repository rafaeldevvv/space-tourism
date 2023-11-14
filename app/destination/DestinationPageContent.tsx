"use client";

/* styles */
import "../globals.css";
import styles from "./destination.module.css";
import utilityClasses from "../shared-css/utility-classes.module.css";
import components from "../shared-css/components.module.css";

/* utils */
import classes from "../utils/classes";

/* typescript */
import { Destination } from "../typescript/interfaces";

/* components */
import Image from "next/image";
import { Tab, TabList, TabPanel } from "../components/TabbedInterface";
import NumberedTitle from "../components/NumberedTitle";

/* react */
import { useState } from "react";

export default function DestinationsTabs({
  destinations,
}: {
  destinations: Destination[];
}) {
  const [selectedDestinationIndex, setSelectedDestinationIndex] = useState(0);

  const names = destinations.map((d) => d.name);
  const tabsIds = destinations.map((_, i) => `destination-tab-${i}`);
  const tabpanelsIds = destinations.map((_, i) => `destination-tabpanel-${i}`);

  const selectedDestination = destinations.find(
    (_, i) => i === selectedDestinationIndex
  )!;

  return (
    <div>
      <NumberedTitle number={1} title="Pick your destination" />
      <div className={classes(utilityClasses.gridContainer)}>
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
              utilityClasses.flex,
              utilityClasses.justifyContentCenterPortrait,
              utilityClasses.justifyContentStartLandscape,
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
                  controls={tabpanelsIds[index]}
                  className={classes(
                    styles.tab,
                    utilityClasses.textWhite,
                    utilityClasses.fs300
                  )}
                  id={tabsIds[index]}
                  onClick={() => setSelectedDestinationIndex(index)}
                >
                  {name}
                </Tab>
              );
            })}
          </TabList>
          <div>
            {destinations.map((d, i) => {
              return (
                <TabPanel
                  key={d.name}
                  id={tabpanelsIds[i]}
                  labelledBy={tabsIds[i]}
                  className={styles.utilities}
                  active={selectedDestination.name === d.name}
                >
                  <DestinationInfo destination={d} />
                </TabPanel>
              );
            })}
          </div>
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
          utilityClasses.uppercase,
          utilityClasses.textLight,
          utilityClasses.fs200,
          utilityClasses.letterSpacing3,
          utilityClasses.ffSansCond
        )}
      >
        {title}
      </h3>
      <p
        className={classes(
          utilityClasses.uppercase,
          utilityClasses.ffSerif,
          styles.fs550
        )}
      >
        {info}
      </p>
    </section>
  );
}

export function DestinationInfo({ destination }: { destination: Destination }) {
  return (
    <article>
      <h2
        className={classes(
          utilityClasses.fs800,
          utilityClasses.ffSerif,
          utilityClasses.uppercase
        )}
      >
        {destination.name}
      </h2>
      <p className={classes(utilityClasses.textLight)}>
        {destination.description}
      </p>

      <hr className={styles.separator} />

      <div className={classes(utilityClasses.flex, styles.infoBlocks)}>
        <InfoBlock title="Avg. Distance" info={destination.distance} />
        <InfoBlock title="Est. travel time" info={destination.travel} />
      </div>
    </article>
  );
}
