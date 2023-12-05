"use client";

/* react */
import { useState, useEffect } from "react";

/* typescript */
import { Technology } from "../typescript/interfaces";

/* styles */
import utilityClasses from "../shared-css/utility-classes.module.css";
import componentsStyles from "../shared-css/components.module.css";
import pageStyles from "./Technology.module.css";
import layoutStyles from "../shared-css/layout.module.css";

/* util functions */
import createIds from "../utils/createIds";
import classnames from "../utils/classnames";

/* components */
import Image from "next/image";
import { Tab, TabList, TabPanel } from "../components/TabbedInterface";
import VisuallyHidden from "../components/VisuallyHidden";

export default function TechnologyPageContent({
  technologies,
}: {
  technologies: readonly Technology[];
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
    <div
      className={classnames(
        layoutStyles["grid-container"],
        layoutStyles["grid-container--technology"],
        pageStyles.gridContainer,
        utilityClasses.flow
      )}
    >
      <h1
        className={classnames(
          utilityClasses.numberedTitle,
          pageStyles.numberedTitle
        )}
      >
        <span>03</span> Space Launch 101
      </h1>

      <div className={classnames(utilityClasses.flex, pageStyles.content)}>
        <TabList
          label="Technologies"
          className={classnames(
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
                className={classnames(
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

        {technologies.map((tech, index) => {
          return (
            <TabPanel
              key={tech.name}
              id={tabpanelsIds[index]}
              labelledBy={tabsIds[index]}
              active={index === selectedTechIndex}
              className={classnames(utilityClasses.flow)}
            >
              <TechnologyArticle technology={tech} />
            </TabPanel>
          );
        })}
      </div>

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
  const hidden = !active;
  return (
    <picture id={id} className={hidden ? utilityClasses.dNone : ""}>
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

export function TechnologyArticle({ technology }: { technology: Technology }) {
  return (
    <article
      className={classnames(pageStyles.terminology, utilityClasses.flow)}
    >
      <header className={utilityClasses.flow}>
        <h2
          className={classnames(
            utilityClasses.textLight,
            utilityClasses.uppercase,
            utilityClasses.fs200,
            utilityClasses.ffSansCond,
            utilityClasses.letterSpacing2
          )}
        >
          The terminology...
        </h2>
        <p
          className={classnames(
            utilityClasses.fs700,
            utilityClasses.ffSerif,
            utilityClasses.uppercase
          )}
        >
          {technology.name}
        </p>
      </header>
      <p className={utilityClasses.textLight}>{technology.description}</p>
    </article>
  );
}
