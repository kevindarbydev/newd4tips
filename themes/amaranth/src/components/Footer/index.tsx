import React from "react";

import { useConfig } from "gatsby-theme-advanced";

import UserLinks from "../UserLinks";
import { Caption } from "../../theme";
import { AnimatedLink } from "../Links";

import * as S from "./styles";

const Footer = (): JSX.Element => {
  const config = useConfig();

  return (
    <S.Wrapper>
      <S.LinkGrid>
        {/* <H3>LINKS</H3> */}
        <UserLinks includeRss />
      </S.LinkGrid>
      <S.Info>
        <Caption>
          Based on{" "}
          <AnimatedLink to="https://github.com/Vagr9K/gatsby-advanced-starter">
            Gatsby Advanced Starter
          </AnimatedLink>
        </Caption>
        <Caption style={{fontSize:'11px', opacity:'0.80'}}>Diablo4.Tips is a fanmade site sharing content about Diablo 4, utilizing official game media solely for educational purposes, with no ownership or claim on the intellectual property</Caption>
      </S.Info>
    </S.Wrapper>
  );
};

export default Footer;
