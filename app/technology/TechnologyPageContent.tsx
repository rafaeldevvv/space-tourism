"use client";

/* react */
import { useState, useEffect } from "react";

/* typescript */
import { Technology } from "../typescript/interfaces";

/* styles */
import utilityClasses from "../shared-css/utility-classes.module.css";
import componentsStyles from "../shared-css/components.module.css";
import pageStyles from "./Technology.module.css";

/* util functions */
import createIds from "../utils/createIds";
import classes from "../utils/classes";

/* components */
import Image from "next/image";
import { Tab, TabList, TabPanel } from "../components/TabbedInterface";
import VisuallyHidden from "../components/VisuallyHidden";
import NumberedTitle from "../components/NumberedTitle";

export default function TechnologyPageContent({
  technologies,
}: {
  technologies: Technology[];
}) {
  const [selectedTechIndex, setSelectedTechIndex] = useState(0);
  const [orientation, setOrientation] = useState<"vertical" | "horizontal">(
    "horizontal"
  );

  const tabsIds = createIds(technologies.length, "tech-tab");
  const tabpanelsIds = createIds(technologies.length, "tech-tabpanel");
  const imagesIds = createIds(technologies.length, "tech-image");

  useEffect(() => {
    /* 
      every time the change event is fired, 
      we create a new mql object, and because of that we
      have to remove the event handler on the previous mql and
      assign an updated remove function to this variable 
    */

    let remove: null | (() => void) = null;

    const updateOrientation = () => {
      if (remove !== null) remove();

      /* create a MediaQueryList object */
      const mql = window.matchMedia(
        "(min-width: 50em) and (orientation: landscape)"
      );

      /* register change event handler */
      mql.addEventListener("change", updateOrientation);

      /* update `remove()` function */
      remove = () => {
        mql.removeEventListener("change", updateOrientation);
      };

      /* check matching and set orientation */
      if (mql.matches) setOrientation("vertical");
      else setOrientation("horizontal");
    };

    updateOrientation();

    return () => {
      if (remove !== null) remove();
    };
  }, []);

  return (
    <div className={utilityClasses.gridAlignContentCenter}>
      <NumberedTitle title="space launch 101" number={3} center={false} />
      <div
        className={classes(
          pageStyles.gridContainer,
          utilityClasses.gridContainer
        )}
      >
        <div
          className={classes(utilityClasses.flex, pageStyles.tablistAndSection)}
        >
          <TabList
            label="Technologies"
            className={classes(
              componentsStyles.numberIndicators,
              utilityClasses.flex,
              utilityClasses.justifyContentCenterPortrait,
              pageStyles.tablist
            )}
            orientation={orientation}
            currentIndex={selectedTechIndex}
            tabSetSize={technologies.length}
            setIndex={setSelectedTechIndex}
          >
            {technologies.map((tech, index) => {
              return (
                <Tab
                  key={tech.name}
                  pos={index + 1}
                  setsize={technologies.length}
                  controls={tabpanelsIds[index]}
                  active={selectedTechIndex === index}
                  onClick={() => setSelectedTechIndex(index)}
                  id={tabsIds[index]}
                  className={classes(
                    utilityClasses.fs600,
                    utilityClasses.ffSerif
                  )}
                  activeClassname={componentsStyles.active}
                >
                  {index + 1} <VisuallyHidden>{tech.name}</VisuallyHidden>
                </Tab>
              );
            })}
          </TabList>

          <TerminologySection
            tabpanelsIds={tabpanelsIds}
            tabsIds={tabsIds}
            selectedTechIndex={selectedTechIndex}
            technologies={technologies}
          />
        </div>
        <div>
          {technologies.map((tech, index) => {
            return (
              <TechPicture
                key={tech.name}
                technology={tech}
                id={imagesIds[index]}
                active={selectedTechIndex === index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function TechPicture({
  technology,
  id,
  active,
}: {
  technology: Technology;
  id: string;
  active: boolean;
}) {
  return (
    <picture id={id} className={active ? "" : utilityClasses.dNone}>
      <source
        srcSet={technology.images.portrait}
        media="(min-width: 50em) and (orientation: landscape)"
      />
      <source srcSet={technology.images.landscape} />
      <Image
        src={technology.images.portrait}
        alt={technology.imageAlt}
        width="768"
        height="527"
      />
    </picture>
  );
}

export function TerminologySection({
  technologies,
  tabsIds,
  tabpanelsIds,
  selectedTechIndex,
}: {
  technologies: Technology[];
  tabpanelsIds: string[];
  tabsIds: string[];
  selectedTechIndex: number;
}) {
  return (
    <section
      className={classes(pageStyles.terminologySection, utilityClasses.flow)}
    >
      <h2
        className={classes(
          utilityClasses.textLight,
          utilityClasses.uppercase,
          utilityClasses.fs200,
          utilityClasses.ffSansCond,
          utilityClasses.letterSpacing2
        )}
      >
        The terminology...
      </h2>
      {technologies.map((tech, index) => {
        return (
          <TabPanel
            key={tech.name}
            id={tabpanelsIds[index]}
            labelledBy={tabsIds[index]}
            active={index === selectedTechIndex}
          >
            <TechnologyArticle technology={tech} />
          </TabPanel>
        );
      })}
    </section>
  );
}

export function TechnologyArticle({ technology }: { technology: Technology }) {
  return (
    <article
      className={classes(pageStyles.tabpanelContent, utilityClasses.flow)}
    >
      <h3
        className={classes(
          utilityClasses.fs700,
          utilityClasses.ffSerif,
          utilityClasses.uppercase
        )}
      >
        {technology.name}
      </h3>
      <p className={utilityClasses.textLight}>{technology.description}</p>
    </article>
  );
}
