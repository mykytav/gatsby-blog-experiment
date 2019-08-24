import React from "react";
import { Link, graphql } from "gatsby";
import { FluidObject } from "gatsby-image";

import { SEO, Layout } from "../components";
import * as S from "./postLayout.styles";
import { MarkdownRemark } from "../graphql.types";
import { Location } from "../common.types";

interface PagePrevNext {
  frontmatter: { slug: string; title: string };
}

const PostLayout = ({
  data: { markdownRemark: post },
  location,
  pageContext: { previous, next },
}: {
  data: { markdownRemark: MarkdownRemark };
  location: Location;
  pageContext: { previous: PagePrevNext; next: PagePrevNext };
}) => {
  const title = post.frontmatter!.title as string;
  const exceprt = post.excerpt as string;

  return (
    <Layout location={location}>
      <SEO title={title} description={exceprt} />
      <S.Title>{title}</S.Title>
      <S.Image
        fluid={post.frontmatter!.cover_img!.childImageSharp!.fluid as FluidObject}
        style={{ position: "absolute" }}
      />
      <S.PostContiainer
        dangerouslySetInnerHTML={{
          __html: post.html!,
        }}
      />
      <S.PostNav>
        <Link to="/">← Go back</Link>
        <S.PostNavItem>
          {previous && (
            <Link to={`/posts${previous.frontmatter.slug}`} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </S.PostNavItem>
        <S.PostNavItem>
          {next && (
            <Link to={`/posts${next.frontmatter.slug}`} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </S.PostNavItem>
      </S.PostNav>
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
      excerpt(pruneLength: 200)
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
