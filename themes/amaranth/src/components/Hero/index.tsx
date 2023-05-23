import React from "react";
import { StaticImage } from 'gatsby-plugin-image'
import * as S from "./styles";

const Hero = (): JSX.Element => { 
          return (
            <S.Wrapper>              
              <StaticImage src='../../../static/images/deckard_cain.0.jpg' style={{borderRadius:'14px'}} alt="Welcome to D4 Tips & Tricks!"/>
              <p>Stay a while and listen...</p>
            </S.Wrapper>
  );
};

export default Hero;


  