import React from "react";
import { Caption } from "../../theme";

import * as S from "./styles";

const Footer = (): JSX.Element => (
    <S.Wrapper>      
      <S.Info>        
        <Caption style={{fontSize:'14px'}}>Diablo4.Tips is a fanmade site sharing content about Diablo 4, utilizing official game media solely for educational purposes, with no ownership or claim on the intellectual property</Caption>
      </S.Info>
    </S.Wrapper>
  );

export default Footer;
