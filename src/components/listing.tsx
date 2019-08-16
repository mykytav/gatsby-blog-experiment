import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

import { MarkdownRemarkEdge } from "../graphql.types";

const LISTING_QUERY = graphql`
  query BlogPostListing {
    allMarkdownRemark(limit: 10, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
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

const Listing = (props: any) => {
  const data = useStaticQuery(LISTING_QUERY);

  return (
    <>
      {data.allMarkdownRemark.edges.map(({ node }: MarkdownRemarkEdge) => (
        <article key={node.frontmatter!.slug as string}>
          <Link to={`/posts${node.frontmatter!.slug}`}>
            <h2>{node.frontmatter!.title}</h2>
          </Link>
          <p>{node.frontmatter!.date}</p>
          <p>{node.excerpt}</p>
          <Link to={`/posts${node.frontmatter!.slug}`}>Read More</Link>
        </article>
      ))}
    </>
  );
};

export default Listing;
