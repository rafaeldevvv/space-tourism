"use client";

/* react */
import { useState, useEffect } from "react";

/* typescript */
import { Technology } from "../typescript/interfaces";

/* styles */
import utilityClasses from "../shared-css/utility-classes.module.css";
import componentsStyles from "../shared-css/components.module.css";
import pageStyles from "./technology.module.css";

/* util functions */
import createIds from "../utils/createIds";

/* components */
import Image from "next/image";
import { Tab, TabList, TabPanel } from "../components/TabbedInterface";
import classes from "../utils/classes";
import VisuallyHidden from "../components/VisuallyHidden";

export default function TechnologyPageContent({
  technologies,
}: {
  technologies: Technology[];
}) {
  const [selectedTechIndex, setSelectedTechIndex] = useState(0);
  const [orientation, setOrientation] = useState<"vertical" | "horizontal">(
    "horizontal"
  );

  const selectedTechnology = technologies.find(
    (_, i) => i === selectedTechIndex
  )!;

  const tabsIds = createIds(technologies.length, "tech-tab");
  const tabpanelsIds = createIds(technologies.length, "tech-tabpanel");

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
  });

  return (
    <div className={classes(utilityClasses.gridContainer, pageStyles.gridContainer)}>
      <div>
        <TabList
          label="Technologies"
          className={classes(
            componentsStyles.numberIndicators,
            utilityClasses.flex,
            utilityClasses.justifyContentCenterPortrait
          )}
          orientation={orientation}
          onArrowDown={(arrow) => {
            console.log(orientation, arrow);
            if (orientation === "horizontal") {
              if (arrow === "ArrowRight") {
                setSelectedTechIndex((i) =>
                  i === technologies.length - 1 ? 0 : i + 1
                );
              } else if (arrow === "ArrowLeft") {
                setSelectedTechIndex((i) =>
                  i === 0 ? technologies.length - 1 : i - 1
                );
              }
            } else {
              if (arrow === "ArrowDown") {
                setSelectedTechIndex((i) =>
                  i === technologies.length - 1 ? 0 : i + 1
                );
              } else if (arrow === "ArrowUp") {
                setSelectedTechIndex((i) =>
                  i === 0 ? technologies.length - 1 : i - 1
                );
              }
            }
          }}
          onEndDown={() => setSelectedTechIndex(technologies.length - 1)}
          onHomeDown={() => setSelectedTechIndex(0)}
        >
          {technologies.map((tech, index) => {
            return (
              <Tab
                key={tech.name}
                pos={index + 1}
                controls={tabpanelsIds[index]}
                active={selectedTechIndex === index}
                onClick={() => setSelectedTechIndex(index)}
                id={tabsIds[index]}
                className={classes(
                  utilityClasses.fs600,
                  utilityClasses.ffSerif
                )}
              >
                {index + 1} <VisuallyHidden>{tech.name}</VisuallyHidden>
              </Tab>
            );
          })}
        </TabList>

        <section>
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
                <article>
                  <h3
                    className={classes(
                      utilityClasses.fs700,
                      utilityClasses.ffSerif,
                      utilityClasses.uppercase
                    )}
                  >
                    {tech.name}
                  </h3>
                  <p className={utilityClasses.textLight}>{tech.description}</p>
                </article>
              </TabPanel>
            );
          })}
        </section>
      </div>
      <div>
        <picture>
          <source
            srcSet={selectedTechnology.images.portrait}
            media="(min-width: 50em) and (orientation: landscape)"
          />
          <source srcSet={selectedTechnology.images.landscape} />
          <Image
            src={selectedTechnology.images.portrait}
            alt={selectedTechnology.imageAlt}
            width="768"
            height="527"
          />
        </picture>
      </div>
    </div>
  );
}
