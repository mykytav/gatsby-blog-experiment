import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";

import { MarkdownRemarkEdge } from "../graphql.types";

const BLOG_POST_ARCHIVE = graphql`
  query BlogPostArchive {
    allMarkdownRemark(limit: 5, sort: { fields: [frontmatter___date], order: DESC }) {
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
            <li key={edge.node.frontmatter!.slug as string}>
              <Link to={`/posts${edge.node.frontmatter!.slug}`}>{edge.node.frontmatter!.title}</Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Archive;
