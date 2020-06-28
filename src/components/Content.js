import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, useStaticQuery } from "gatsby";
import { ContentWrapper } from "../elements";

export const Content = ({ children }) => {
  return <ContentWrapper>{children}</ContentWrapper>;
};
