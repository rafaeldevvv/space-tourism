"use client";

/* react */
import { useState } from "react";

/* utils */
import classes from "../utils/classes";

/* styles */
import utilityClasses from "../shared-css/utility-classes.module.css";
import componentsStyles from "../shared-css/components.module.css";
import pageStyles from "./crew.module.css";

/* tyepscript */
import { Member } from "../typescript/interfaces";

/* components */
import { Tab, TabList, TabPanel } from "../components/TabbedInterface";
import Image from "next/image";
import VisuallyHidden from "../components/VisuallyHidden";
import NumberedTitle from "../components/NumberedTitle";

export default function CrewTab({ crew }: { crew: Member[] }) {
  const [selectedMemberIndex, setSelectedMemberIndex] = useState(0);

  const selectedMember = crew.find((_, i) => i === selectedMemberIndex)!;

  const roles = crew.map((m) => m.role);

  const tabpanelsIds = new Array(crew.length).map(
    (_, i) => `crew-tabpanel-${i}`
  );
  const tabsIds = new Array(crew.length).map((_, i) => `crew-tab-${i}`);

  return (
    <div>
      <NumberedTitle title="Meet your crew" number={2} />
      <div
        className={classes(
          utilityClasses.gridContainer,
          pageStyles.gridContainer
        )}
      >
        <div>
          <Image
            src={selectedMember.images.webp}
            alt={selectedMember.imageAlt}
            width="575"
            height="700"
            className={pageStyles.personImage}
          />
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
                  <article
                    className={classes(
                      utilityClasses.flow,
                      pageStyles.tabContent
                    )}
                  >
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
            onArrowDown={(key) => {
              if (key === "ArrowLeft") {
                setSelectedMemberIndex((i) =>
                  i === 0 ? crew.length - 1 : i - 1
                );
              } else if (key === "ArrowRight") {
                setSelectedMemberIndex((i) =>
                  i === crew.length - 1 ? 0 : i + 1
                );
              }
            }}
            onHomeDown={() => {
              setSelectedMemberIndex(0);
            }}
            onEndDown={() => {
              setSelectedMemberIndex(crew.length - 1);
            }}
            style={{ "--gap": "1.5rem" } as React.CSSProperties}
          >
            {crew.map((member, index) => {
              return (
                <Tab
                  key={member.name}
                  active={selectedMemberIndex === index}
                  pos={index + 1}
                  controls={tabpanelsIds[index]}
                  id={tabsIds[index]}
                  onClick={() => setSelectedMemberIndex(index)}
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
