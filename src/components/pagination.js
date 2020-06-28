import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, useStaticQuery } from "gatsby";
import "twin.macro";
import { PaginationWrapper } from "../elements";

export const Pagination = ({ isFirst, isLast, prevPage, nextPage }) => {
  return (
    <PaginationWrapper
      tw="py-12 flex items-center justify-center"
      isFirst={isFirst}
      isLast={isLast}
    >
      <Link
        to={prevPage}
        tw="text-sm leading-4 no-underline font-normal mx-8 hover:underline focus:underline"
      >
        Previous Page
      </Link>
      <Link
        to={nextPage}
        tw="text-sm leading-4 no-underline font-normal mx-8 hover:underline focus:underline"
      >
        Next Page
      </Link>
    </PaginationWrapper>
  );
};
