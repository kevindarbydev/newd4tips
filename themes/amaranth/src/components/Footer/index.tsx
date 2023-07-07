import React from "react";
import { AnimatedLink } from "../Links";

import * as S from "./styles";

const Footer = (): JSX.Element => (
  <S.Wrapper>
    <S.Info>
      <S.MobileFooter>
        Diablo4.Tips is a fanmade site sharing content about Diablo 4, utilizing
        official game media solely for educational purposes, with no ownership
        or claim on the intellectual property
      </S.MobileFooter>
      <S.MobileFooter>
        Made with{" "}
        <AnimatedLink to="https://github.com/kevindarbydev/Diablo4.Tips">
          {" "}
          &lt;3
        </AnimatedLink>
      </S.MobileFooter>
    </S.Info>
  </S.Wrapper>
);

export default Footer;
