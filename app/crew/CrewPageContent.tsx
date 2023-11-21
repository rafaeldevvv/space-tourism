"use client";

/* react */
import { useState } from "react";

/* utils */
import classes from "../utils/classes";
import createIds from "../utils/createIds";

/* styles */
import utilityClasses from "../shared-css/utility-classes.module.css";
import componentsStyles from "../shared-css/components.module.css";
import pageStyles from "./Crew.module.css";

/* tyepscript */
import { Member } from "../typescript/interfaces";

/* components */
import { Tab, TabList, TabPanel } from "../components/TabbedInterface";
import Image from "next/image";
import VisuallyHidden from "../components/VisuallyHidden";
import NumberedTitle from "../components/NumberedTitle";

export default function CrewTab({ crew }: { crew: readonly Member[] }) {
  const [selectedMemberIndex, setSelectedMemberIndex] = useState(0);

  const roles = crew.map((m) => m.role);

  const tabsIds = createIds(crew.length, "crew-tab");
  const tabpanelsIds = createIds(crew.length, "crew-tabpanel");
  const imagesIds = createIds(crew.length, "crew-image");

  return (
    <div className={utilityClasses.gridAlignContentCenter}>
      <NumberedTitle title="Meet your crew" number={2} />
      <div
        className={classes(
          utilityClasses.gridContainer,
          pageStyles.gridContainer
        )}
      >
        <div>
          {crew.map((member, index) => {
            return (
              <Image
                key={member.name}
                src={member.images.png}
                alt={member.imageAlt}
                width="445"
                height="445"
                id={imagesIds[index]}
                className={classes(
                  index !== selectedMemberIndex ? utilityClasses.dNone : "",
                  pageStyles.personImage
                )}
              />
            );
          })}
          <hr className={pageStyles.separator} />
        </div>

        <div className={classes(utilityClasses.flex, pageStyles.tabsAndPanels)}>
          <div>
            {crew.map((member, index) => {
              return (
                <TabPanel
                  key={member.name}
                  id={tabpanelsIds[index]}
                  labelledBy={tabsIds[index]}
                  active={selectedMemberIndex === index}
                >
                  <MemberArticle member={member} />
                </TabPanel>
              );
            })}
          </div>

          <TabList
            className={classes(
              componentsStyles.dotIndicators,
              utilityClasses.flex,
              utilityClasses.justifyContentCenterPortrait,
              utilityClasses.justifyContentStartLandscape
            )}
            label="Crew"
            currentIndex={selectedMemberIndex}
            setIndex={setSelectedMemberIndex}
            tabSetSize={crew.length}
            style={{ "--gap": "1.5rem" } as React.CSSProperties}
          >
            {crew.map((member, index) => {
              return (
                <Tab
                  key={member.name}
                  active={selectedMemberIndex === index}
                  pos={index + 1}
                  setsize={crew.length}
                  controls={tabpanelsIds[index] + " " + imagesIds[index]}
                  id={tabsIds[index]}
                  onClick={() => setSelectedMemberIndex(index)}
                  activeClassname={componentsStyles.active}
                >
                  <VisuallyHidden>{roles[index]}</VisuallyHidden>
                </Tab>
              );
            })}
          </TabList>
        </div>
      </div>
    </div>
  );
}

export function MemberArticle({ member }: { member: Member }) {
  return (
    <article className={classes(utilityClasses.flow, pageStyles.tabContent)}>
      <h2
        className={classes(
          utilityClasses.uppercase,
          utilityClasses.ffSerif,
          utilityClasses.fs700,
          utilityClasses.letterSpacing2
        )}
      >
        <span
          className={classes(
            utilityClasses.fs600,
            utilityClasses.dBlock,
            utilityClasses.letterSpacing3,
            pageStyles.role
          )}
        >
          {member.role}
        </span>
        {member.name}
      </h2>
      <p className={utilityClasses.textLight}>{member.bio}</p>
    </article>
  );
}
