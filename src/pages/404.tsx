import React from "react";

import { Layout, SEO } from "../components";
import { Location } from "../common.types";

const NotFoundPage = ({ location }: { location: Location }) => (
  <Layout location={location}>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;
