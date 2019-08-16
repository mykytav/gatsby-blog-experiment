import { Link } from "gatsby";
import React from "react";

import Image from "../components/image";
import Layout from "../components/layout";
// import LayoutClass from "../components/layoutClass";
import SEO from "../components/seo";

const IndexPage = (props: any) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people THERE</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
