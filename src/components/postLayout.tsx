import React from "react";
import { graphql } from "gatsby";

import { MarkdownRemark } from "../graphql.types";
import Layout from "./layout";
import { Location } from "../common.types";

const PostLayout = ({
  data: { markdownRemark },
  location,
}: {
  data: { markdownRemark: MarkdownRemark };
  location: Location;
}) => (
  <Layout location={location}>
    <h1>{markdownRemark.frontmatter!.title}</h1>
    <div
      dangerouslySetInnerHTML={{
        __html: markdownRemark.html!,
      }}
    />
  </Layout>
);

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
      }
    }
  }
`;
