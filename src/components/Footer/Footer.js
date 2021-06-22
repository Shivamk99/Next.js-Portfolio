import React from "react";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { SiDevDotTo } from "react-icons/si";
import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+91 9110648553">+91 9110648553</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:smileyshivam3042@gmail.com">
            smileyshivam3042@gmail.com
          </LinkItem>
        </LinkColumn>
        <SocialIconsContainer style={{ margin: "30px", paddingLeft: "40px" }}>
          <SocialContainer>
            <SocialIcons href="https://github.com/SmileyShivam">
              <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.linkedin.com/in/shivam-kumar-1312771b5/">
              <AiFillLinkedin size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://dev.to/smileyshivam">
              <SiDevDotTo size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://twitter.com/_toxic_smiley">
              <AiFillTwitterCircle size="3rem" />
            </SocialIcons>
          </SocialContainer>
        </SocialIconsContainer>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
