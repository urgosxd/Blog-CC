import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { Layout, ContentBlog, HTMLContent, Content } from "../components";

export const BlogTemplate = ({
  content,
  contentComponent,
  description,
  title,
}) => {
  const PostContent = contentComponent || ContentBlog;
  return (
    <Content>
      <div>
        <h3 N="TITLE">{title}</h3>
        <div N="CARD User"></div>
      </div>

      <div N="Palbras para empezar">{description}</div>

      <div N="LEyenda"></div>
      <PostContent content={content} />
    </Content>
  );
};

export const Blog = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

export default Blog;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`;
