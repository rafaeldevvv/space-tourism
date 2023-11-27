"use client";

/* styles */
import "../globals.css";
import pageStyles from "./Destination.module.css";
import utilityClasses from "../shared-css/utility-classes.module.css";
import componentsStyles from "../shared-css/components.module.css";
import layoutStyles from "../shared-css/layout.module.css";

/* utils */
import classnames from "../utils/classnames";
import createIds from "../utils/createIds";

/* typescript */
import { Destination } from "../typescript/interfaces";

/* components */
import Image from "next/image";
import { Tab, TabList, TabPanel } from "../components/TabbedInterface";

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
    <div
      className={classnames(
        layoutStyles["grid-container"],
        layoutStyles["grid-container--destination"],
        pageStyles.gridContainer,
        utilityClasses.flow
      )}
    >
      <h1 className={utilityClasses.numberedTitle}>
        <span aria-hidden={true}>01</span> Pick your destination
      </h1>

      <TabList
        className={classnames(
          componentsStyles.underlineIndicators,
          utilityClasses.flex,
          utilityClasses.justifyContentCenterPortrait,
          utilityClasses.justifyContentStartLandscape,
          pageStyles.tablist
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
              className={classnames(
                pageStyles.tab,
                utilityClasses.textLight,
                utilityClasses.fs300,
                utilityClasses.ffSansCond,
                utilityClasses.letterSpacing2,
                utilityClasses.uppercase
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

      {destinations.map((d, i) => {
        return (
          <TabPanel
            key={d.name}
            id={tabpanelsIds[i]}
            labelledBy={tabsIds[i]}
            className={classnames(
              pageStyles.utilities,
              pageStyles.destinationInfo
            )}
            active={selectedDestination.name === d.name}
          >
            <DestinationInfo destination={d} />
          </TabPanel>
        );
      })}

      {destinations.map((dest, index) => {
        return (
          <picture>
            <source srcSet={dest.images.webp} type="image/webp" />
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
          </picture>
        );
      })}
    </div>
  );
}

export function MetaBlock({ title, info }: { title: string; info: string }) {
  return (
    <section>
      <h3
        className={classnames(
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
        className={classnames(
          utilityClasses.uppercase,
          utilityClasses.ffSerif
        )}
      >
        {info}
      </p>
    </section>
  );
}

export function DestinationInfo({ destination }: { destination: Destination }) {
  return (
    <article className={classnames(utilityClasses.flow)}>
      <h2
        className={classnames(
          utilityClasses.fs800,
          utilityClasses.ffSerif,
          utilityClasses.uppercase
        )}
      >
        {destination.name}
      </h2>
      <p className={classnames(utilityClasses.textLight)}>
        {destination.description}
      </p>

      <div
        className={classnames(utilityClasses.flex, pageStyles.destinationMeta)}
      >
        <MetaBlock title="Avg. Distance" info={destination.distance} />
        <MetaBlock title="Est. travel time" info={destination.travel} />
      </div>
    </article>
  );
}
