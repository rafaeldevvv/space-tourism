"use client";

/* styles */
import "../globals.css";
import styles from "./Destination.module.css";
import utilityClasses from "../shared-css/utility-classes.module.css";
import componentsStyles from "../shared-css/components.module.css";

/* utils */
import classes from "../utils/classes";
import createIds from "../utils/createIds";

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
  destinations: readonly Destination[];
}) {
  const [selectedDestinationIndex, setSelectedDestinationIndex] = useState(0);

  const names = destinations.map((d) => d.name);

  /* these ids are necessary because we need to relate tabs and tabpanels */
  const tabsIds = createIds(destinations.length, "destination-tab");
  const tabpanelsIds = createIds(destinations.length, "destination-tabpanel");
  const imagesIds = createIds(destinations.length, "destination-image");

  const selectedDestination = destinations.find(
    (_, i) => i === selectedDestinationIndex
  )!;

  return (
    <div className={utilityClasses.gridAlignContentCenter}>
      <NumberedTitle number={1} title="Pick your destination" />
      <div className={classes(utilityClasses.gridContainer)}>
        <div>
          {destinations.map((dest, index) => {
            return (
              <Image
                key={dest.name}
                src={dest.images.png}
                alt={dest.imageAlt}
                width="445"
                height="445"
                id={imagesIds[index]}
                className={
                  index !== selectedDestinationIndex ? utilityClasses.dNone : ""
                }
              />
            );
          })}
        </div>
        <div>
          <TabList
            className={classes(
              componentsStyles.underlineIndicators,
              utilityClasses.flex,
              utilityClasses.justifyContentCenterPortrait,
              utilityClasses.justifyContentStartLandscape,
              styles.tablist
            )}
            label="Destinations"
            currentIndex={selectedDestinationIndex}
            tabSetSize={destinations.length}
            setIndex={setSelectedDestinationIndex}
          >
            {names.map((name, index) => {
              return (
                <Tab
                  key={name}
                  active={index === selectedDestinationIndex}
                  pos={index + 1}
                  setsize={destinations.length}
                  controls={tabpanelsIds[index] + " " + imagesIds[index]}
                  className={classes(
                    styles.tab,
                    utilityClasses.textWhite,
                    utilityClasses.fs300
                  )}
                  id={tabsIds[index]}
                  onClick={() => setSelectedDestinationIndex(index)}
                  activeClassname={componentsStyles.active}
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
