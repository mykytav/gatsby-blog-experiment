import { graphql, useStaticQuery } from "gatsby";
import React from "react";

import { MarkdownRemarkEdge } from "../graphql.types";

const BLOG_POST_ARCHIVE = graphql`
  query BlogPostArchive {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            slug
            date
          }
        }
      }
    }
  }
`;

const Archive = () => {
  const data = useStaticQuery(BLOG_POST_ARCHIVE);

  return (
    <>
      <h3>Archive</h3>
      <aside>
        <ul>
          {data.allMarkdownRemark.edges.map((edge: MarkdownRemarkEdge) => (
            <li key={edge.node.frontmatter!.slug as string}>{edge.node.frontmatter!.title}</li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Archive;
