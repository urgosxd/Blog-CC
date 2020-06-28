import { NavWrapper } from "../elements";
import React from "react";
import { Link } from "gatsby";

export const Nav = () => (
  <NavWrapper>
    <div>
      <h4>BLOG</h4>
      <button>
        <Link>Publicar</Link>
      </button>
    </div>
  </NavWrapper>
);
