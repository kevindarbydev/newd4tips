import * as React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import ThemeProvider, { constants } from "../theme";

import LayoutWidthContainer from "../components/shared/LayoutWidthContainer";

const LayoutGrid = styled.div`
  min-height: 100vh;
  min-width: 100%;

  padding-top: 16px;

  display: grid;
  grid-template-columns: 100%;
  gap: 80px;
  align-content: space-between;
  background-color: var(--color-black-dark);

  @media (max-width: ${constants.breakpoints.sm}) {
    gap: 40px;
  }
`;

type MainLayoutProps = {
  children?: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps): JSX.Element => (
  <ThemeProvider>
        <Helmet        
          >
            <title>Diablo 4 Tips & Tricks</title>             
            </Helmet>
          
    
      <LayoutGrid>
        <LayoutWidthContainer>
          <Navigation />
         
        </LayoutWidthContainer>

      {children}
        <Footer />
      </LayoutGrid>   
  </ThemeProvider>
);

export default MainLayout;
