import React, { Component } from "react";
import { graphql, StaticQuery } from "gatsby";

import Header from "./header";

interface Props {
  children: any;
}

const SITE_METADATA_QUERY = graphql`
  query SiteTitleQueryClass {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

class LayoutClass extends Component<Props> {
  public render() {
    return (
      <StaticQuery
        query={SITE_METADATA_QUERY}
        render={data => (
          <>
            <Header siteTitle={data.site.siteMetadata.title} />
            <div
              style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `0px 1.0875rem 1.45rem`,
                paddingTop: 0,
              }}
            >
              <main>{this.props.children}</main>
              <p>{data.site.siteMetadata.author}</p>
            </div>
          </>
        )}
      />
    );
  }
}

export default LayoutClass;
