import React from "react";
import { HeaderThree, TagList } from "../Projects/ProjectsStyles";
import {
  Section,
  SectionText,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AboutStyles";

const Acomplishments = () => (
  <Section id="about">
    <SectionTitle>About</SectionTitle>
    <SectionText>
      I am Shivam Kumar, Passionate about coding and tech. I have a habit of
      reading current trends and startups. Always exicted to learn and explore
      trending technologies. I am a quick learner and believe in learning from
      my past mistakes. This is a virtue as it can take me ahead in both my
      professional and personal life.
    </SectionText>
    <HeaderThree>Skills</HeaderThree>
    <TagList style={{ marginRight: "auto" }}>
      JavaScript, React.js, Next.js, MongoDB, Node.js, Express, p5.JS, HTML5,
      CSS3, SASS, Java, getstream
    </TagList>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
