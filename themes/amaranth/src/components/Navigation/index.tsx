import React from "react";

import { AdvancedLogo } from "../../icons";

import * as S from "./style";

const Navigation = (): JSX.Element => {
  return (
    <S.Wrapper>
      <S.HomeButton to="/">
        <AdvancedLogo width={36} height={36} />
        <S.SiteTitle>D4 Tips</S.SiteTitle>
      </S.HomeButton>
      <S.NavGrid>
     
        <S.NavButton noBasePath to="/category/Necromancer">
          Necromancer
        </S.NavButton>
         <S.NavButton noBasePath to="/category/Rogue">
          Rogue
        </S.NavButton>
         <S.NavButton noBasePath to="/category/Druid">
          Druid
        </S.NavButton>
         <S.NavButton noBasePath to="/">
          Sorceror
        </S.NavButton>
         <S.NavButton noBasePath to="/category/Barbarian">
          Barbarian
        </S.NavButton>
     
      </S.NavGrid>
    </S.Wrapper>
    
  );
};

export default Navigation;
