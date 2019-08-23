import React from "react";
import { graphql } from "gatsby";
import Img, { FluidObject } from "gatsby-image";
import styled from "styled-components";

import { MarkdownRemark } from "../graphql.types";
import Layout from "./layout";
import { Location } from "../common.types";

const Image = styled(Img)`
  position: absolute;
  overflow: hidden;
  width: 100%;
  left: 0;
  right: 0;
  height: 400px;
`;

const PostContiainer = styled.div`
  margin-top: 450px;
`;

const PostLayout = ({
  data: { markdownRemark },
  location,
}: {
  data: { markdownRemark: MarkdownRemark };
  location: Location;
}) => {
  console.log("markdownRemark.frontmatter:", markdownRemark.frontmatter);
  return (
    <Layout location={location}>
      <h1>{markdownRemark.frontmatter!.title}</h1>
      <Image
        fluid={markdownRemark.frontmatter!.cover_img!.childImageSharp!.fluid as FluidObject}
        style={{ position: "absolute" }}
      />
      <PostContiainer
        dangerouslySetInnerHTML={{
          __html: markdownRemark.html!,
        }}
      />
    </Layout>
  );
};

export default PostLayout;

PostLayout.defaultProps = {
  data: {},
};

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        slug
        cover_img {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
