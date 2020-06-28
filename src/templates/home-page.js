import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { PostReciente, Content, Card, Pagination, Layout } from "../components";
import { set } from "lodash";

export const Home = ({ pageContext, data }) => {
  const posts = data.allMarkdownRemark.edges;
  const { currentPage, numPages } = pageContext;
  const isFirt = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`;
  const nextPage = `/${currentPage + 1}`;

  const Thelast = posts[posts.length - 1];

  const index = posts.indexOf(Thelast);
  console.log(posts);

  return (
    <Layout>
      <PostReciente />
      <Content>
        {posts.map((post, i) =>
          i === index ? null : (
            <Card
              tumbnail={post.node.frontmatter.featuredimage}
              description={post.node.frontmatter.date}
              title={post.node.frontmatter.title}
              link={post.node.fields.slug}
            />
          )
        )}
      </Content>
      <Pagination
        isFirst={isFirt}
        isLast={isLast}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Layout>
  );
};

export default Home;

export const pageQuery = graphql`
  query AllQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 200, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
