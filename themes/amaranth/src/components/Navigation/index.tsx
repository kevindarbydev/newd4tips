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
        <S.NavButton to="/">Guides</S.NavButton>
        <S.NavButton noBasePath to="/about">
          About
        </S.NavButton>
      </S.NavGrid>
    </S.Wrapper>
  );
};

export default Navigation;
