import React from "react";
import { Helmet } from "react-helmet";
import { Nav } from "../components";
import { styled } from "twin.macro";

export const Layout = ({ children }) => {
  return (
    <Main>
      <Helmet>
        <html lang="en" />
      </Helmet>
      <Nav />
      {children}
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
