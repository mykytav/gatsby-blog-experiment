import React from "react";

import { Layout, Listing } from "../components";
import { Location } from "../common.types";

const IndexPage = ({ location }: { location: Location }) => (
  <Layout location={location}>
    <Listing />
  </Layout>
);

export default IndexPage;
