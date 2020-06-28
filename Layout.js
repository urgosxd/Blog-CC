import React from "react";
import { Helmet } from "react-helmet";
import useSiteMetadata from "./SiteMetadata";
import { styled } from "twin.macro";
import { LayoutWrapper } from "../elements";
import { Nav } from "../components";

export const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <Main>
      <Helmet>
        <html lang="es" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
      </Helmet>
      <LayoutWrapper>
        <Nav />

        {children}
      </LayoutWrapper>
    </Main>
  );
};

const Main = styled.main`
  display: grid;
  grid-template-columns: minmax(60px, 1fr) repeat(6, minmax(60px, 190px)) minmax(
      60px,
      1fr
    );

  background-size: cover;
  transition: 0.5s;
`;
