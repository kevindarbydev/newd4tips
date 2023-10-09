import React from "react";
import UserLinks from "../UserLinks";
import { Caption } from "../../theme";

import * as S from "./styles";

const Footer = (): JSX.Element => (
    <S.Wrapper>
      <S.LinkGrid>       
        <UserLinks includeRss />
      </S.LinkGrid>
      <S.Info>        
        <Caption style={{fontSize:'12.5px'}}>Diablo4.Tips is a fanmade site sharing content about Diablo 4, utilizing official game media solely for educational purposes, with no ownership or claim on the intellectual property</Caption>
      </S.Info>
    </S.Wrapper>
  );

export default Footer;
