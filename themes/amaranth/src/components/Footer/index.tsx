import React from "react";
import UserLinks from "../UserLinks";
import { AnimatedLink } from "../Links";
import { Caption } from "../../theme";

import * as S from "./styles";

const Footer = (): JSX.Element => (
  <S.Wrapper>
    <S.LinkGrid>
      {/* <H3>LINKS</H3> */}
      <UserLinks includeRss />
    </S.LinkGrid>
    <S.Info>
      <Caption style={{ fontSize: "12px", color: "#ff6f00", textAlign:'center' }}>
        Diablo4.Tips is a fanmade site sharing content about Diablo 4, utilizing
        official game media solely for educational purposes, with no ownership
        or claim on the intellectual property
      </Caption>
      <Caption style={{ fontSize: "12px", color: "#ff6f00" }}>
        Made with{" "}
        <AnimatedLink to="https://github.com/kevindarbydev/Diablo4.Tips">
          {" "}
          &lt;3
        </AnimatedLink>
      </Caption>
    </S.Info>
  </S.Wrapper>
);

export default Footer;
