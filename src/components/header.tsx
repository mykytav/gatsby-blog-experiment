import { Link } from "gatsby";
import React from "react";

import Logo from "../images/logo.jpg";

const Header = ({ siteTitle }: { siteTitle: string }) => (
  <header
    style={{
      background: `rebeccapurple`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img style={{ width: "100px" }} src={Logo} alt="Gatsby logo" />
        </Link>
      </h1>
    </div>
  </header>
);

export default Header;
