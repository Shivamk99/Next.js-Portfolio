import React from "react";
import { DiReact, DiJsBadge } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";
import {
  SiNextDotJs,
  SiGraphql,
  SiHtml5,
  SiCss3,
  SiAdobe,
  SiTypescript,
  SiVisualstudiocode,
  SiGithub,
} from "react-icons/si";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle style={{ padding: "12px 0px" }}>Technologies</SectionTitle>
    <SectionText>
      I have worked with a range a technologies in the web development world.
    </SectionText>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>Currently</ListTitle>
          <picture style={{ marginBottom: "15px" }}>
            <DiReact size="3rem" style={{ marginRight: "3px" }} />
            <SiNextDotJs size="3rem" style={{ marginRight: "5px" }} />
            <DiJsBadge size="3rem" style={{ marginRight: "5px" }} />
            <SiTypescript size="3rem" style={{ marginRight: "5px" }} />
            <SiHtml5 size="3rem" style={{ marginRight: "5px" }} />
            <SiCss3 size="3rem" style={{ marginRight: "5px" }} />
            <SiGraphql size="3rem" />
          </picture>
          <ListParagraph>
            React.js, Next.js, Javascript, <br /> typescript, GraphQL, HTML5, <br /> CSS3,
            Material-ui getstream
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Familiar tools</ListTitle>
          <picture style={{ marginBottom: "15px" }}>
            <SiGithub size="3rem" style={{ marginRight: "5px" }} />
            <SiVisualstudiocode size="3rem" style={{ marginRight: "5px" }} />
            <SiAdobe size="3rem" />
          </picture>
          <ListParagraph>
            Experience with <br />
            tools like VsCode, Git, Adobe,
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
