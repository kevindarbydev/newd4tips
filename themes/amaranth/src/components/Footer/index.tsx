import React from "react";
import UserLinks from "../UserLinks";
import { Caption } from "../../theme";

import * as S from "./styles";

const Footer = (): JSX.Element => {
  return (
    <S.Wrapper>
      <S.LinkGrid>
        {/* <H3>LINKS</H3> */}
        <UserLinks includeRss />
      </S.LinkGrid>
      <S.Info>
        {/* <Caption>
          Made with
          <AnimatedLink to="https://github.com/kevindarbydev">
            <pre>&nbsp;&lt;3</pre>
          </AnimatedLink> 
        </Caption>*/}
        <Caption style={{fontSize:'11px', opacity:'0.80'}}>Diablo4.Tips is a fanmade site sharing content about Diablo 4, utilizing official game media solely for educational purposes, with no ownership or claim on the intellectual property</Caption>
      </S.Info>
    </S.Wrapper>
  );
};

export default Footer;
