import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import Img from "gatsby-image";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";

import Archive from "./archive";
import Header from "./header";
import { Location } from "../common.types";
import "./layout.css";
import { config } from "react-spring";

const Wrapper = styled.div/*css*/ `
  margin: 1rem auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`;

interface Props {
  location: Location;
}

const Layout: React.FC<Props> = ({ location, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
      file(relativePath: { regex: "/bg/" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const styles = useSpring({
    from: { height: location.pathname === "/" ? 100 : 200 },
    to: { height: location.pathname === "/" ? 200 : 100 },
    config: config.default,
  });

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <animated.div style={{ overflow: "hidden", ...styles }}>
        <Img fluid={data.file.childImageSharp.fluid} />
      </animated.div>
      <Wrapper>
        <main>{children}</main>
        <Archive />
      </Wrapper>
    </>
  );
};

export default Layout;
