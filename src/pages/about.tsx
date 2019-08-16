import React from "react";

import { Layout } from "../components";
import { Location } from "../common.types";

const About = ({ location }: { location: Location }) => (
  <Layout location={location}>
    <div>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint excepturi aspernatur asperiores sequi expedita
      accusamus quos voluptatibus. Beatae quod accusamus praesentium similique saepe, tempore voluptate. Dignissimos,
      assumenda neque. Vitae, dicta.
    </div>
  </Layout>
);

export default About;
