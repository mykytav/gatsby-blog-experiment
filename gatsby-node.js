const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    graphql(`
      query GetBlogPostSlug {
        allMarkdownRemark(limit: 100, sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              frontmatter {
                slug
                title
              }
            }
          }
        }
      }
    `).then(results => {
      const posts = results.data.allMarkdownRemark.edges;
      results.data.allMarkdownRemark.edges.forEach(({ node }, i) => {
        const previous = i === posts.length - 1 ? null : posts[i + 1].node;
        const next = i === 0 ? null : posts[i - 1].node;

        createPage({
          path: `/posts${node.frontmatter.slug}`,
          component: path.resolve("./src/templates/postLayout.tsx"),
          context: {
            slug: node.frontmatter.slug,
            previous,
            next,
          },
        });
      });

      resolve();
    });
  });
};

exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig();
  if (stage.startsWith("develop") && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "react-dom": "@hot-loader/react-dom",
    };
  }
};
