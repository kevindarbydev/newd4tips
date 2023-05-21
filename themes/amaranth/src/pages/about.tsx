import * as React from "react";
import { Helmet } from "react-helmet";

import Layout from "../layouts";

const AboutPage = (): JSX.Element => { 
  return (
    <Layout>
      <div className="about-container">
        <Helmet title='About' />
      </div>
    </Layout>
  );
};

export default AboutPage;
