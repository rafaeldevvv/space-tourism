"use client";

/* react */
import { useState } from "react";

/* utils */
import classnames from "../utils/classnames";
import createIds from "../utils/createIds";

/* styles */
import utilityClasses from "../shared-css/utility-classes.module.css";
import componentsStyles from "../shared-css/components.module.css";
import pageStyles from "./Crew.module.css";
import layoutStyles from "../shared-css/layout.module.css";

/* tyepscript */
import { Member } from "../typescript/interfaces";

/* components */
import { Tab, TabList, TabPanel } from "../components/TabbedInterface";
import Image from "next/image";
import VisuallyHidden from "../components/VisuallyHidden";

export default function CrewTab({ crew }: { crew: readonly Member[] }) {
  const [selectedMemberIndex, setSelectedMemberIndex] = useState(0);

  const roles = crew.map((m) => m.role);

  const tabsIds = createIds(crew.length, "crew-tab");
  const tabpanelsIds = createIds(crew.length, "crew-tabpanel");
  const imagesIds = createIds(crew.length, "crew-image");

  return (
    <div
      className={classnames(
        layoutStyles["grid-container"],
        layoutStyles["grid-container--crew"],
        utilityClasses.flow
      )}
    >
      <h1 className={utilityClasses.numberedTitle}>
        <span aria-hidden={true}>02</span> meet your crew
      </h1>

      <TabList
        className={classnames(
          componentsStyles.dotIndicators,
          utilityClasses.flex,
          pageStyles.tabs
        )}
        label="Crew members"
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
              <VisuallyHidden>The {roles[index]}</VisuallyHidden>
            </Tab>
          );
        })}
      </TabList>

      {crew.map((member, index) => {
        return (
          <TabPanel
            key={member.name}
            id={tabpanelsIds[index]}
            labelledBy={tabsIds[index]}
            active={selectedMemberIndex === index}
            className={pageStyles.content}
          >
            <MemberArticle member={member} />
          </TabPanel>
        );
      })}

      <div className={pageStyles.imageWrapper}>
        {crew.map((member, index) => {
          return (
            <MemberPicture
              key={member.name}
              id={imagesIds[index]}
              active={index === selectedMemberIndex}
              member={member}
            />
          );
        })}
        <div className={pageStyles.separator} />
      </div>
    </div>
  );
}

export function MemberPicture({
  member,
  active,
  id,
}: {
  member: Member;
  active: boolean;
  id: string;
}) {
  return (
    <picture hidden={!active}>
      <source srcSet={member.images.webp} type="image/webp" />
      <Image
        src={member.images.png}
        alt={member.imageAlt}
        width="445"
        height="445"
        id={id}
        className={classnames(
          pageStyles.image,
          active ? "" : utilityClasses.dNone
        )}
      />
    </picture>
  );
}

export function MemberArticle({ member }: { member: Member }) {
  return (
    <article className={classnames(utilityClasses.flow, pageStyles.tabContent)}>
      <header
        className={classnames(
          utilityClasses.flow,
          utilityClasses["flow--space-small"]
        )}
      >
        <h2
          className={classnames(
            utilityClasses.fs600,
            utilityClasses.letterSpacing3,
            utilityClasses.uppercase,
            utilityClasses.ffSerif,
            pageStyles.role
          )}
        >
          {member.role}
        </h2>
        <p
          className={classnames(
            utilityClasses.uppercase,
            utilityClasses.ffSerif,
            utilityClasses.fs700,
            utilityClasses.letterSpacing2
          )}
        >
          {member.name}
        </p>
      </header>
      <p className={utilityClasses.textLight}>{member.bio}</p>
    </article>
  );
}
