import React from "react";
import PropTypes, { element } from "prop-types";
import { Link, graphql } from "gatsby";
import {
  Layout,
  ContentBlog,
  HTMLContent,
  Content,
  Leyenda,
} from "../components";
import { text } from "html-to-json-data/definitions";
import convert from "html-to-json-data";
import html2 from "html2json";

export const BlogTemplate = ({
  content,
  contentComponent,
  description,
  title,
  typeBiblia,
  leyenda,
}) => {
  const PostContent = contentComponent || ContentBlog;

  const JSONSTART = html2.html2json(content);

  const found = JSONSTART.child.filter(
    (element) =>
      element.tag === "h1" ||
      element.tag === "h2" ||
      element.tag === "h3" ||
      element.tag === "h4" ||
      element.tag === "h5" ||
      element.tag === "h6"
  );

  JSONSTART.child.map((ele) =>
    found.includes(ele)
      ? Object.defineProperties(ele, {
          attr: {
            value: { id: ele.child[0].text },
            writable: true,
          },
        })
      : null
  );

  const HTMLEND = html2.json2html(JSONSTART);

  console.log(HTMLEND);

  return (
    <Content>
      <div>
        <h3 id="Titulo">{title}</h3>
      </div>

      <div id="descrip">{description}</div>
      <div>
        <Leyenda leyenda={found} />
      </div>
      <PostContent content={HTMLEND} />
    </Content>
  );
};

BlogTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  typeBiblia: PropTypes.bool,
};

export const Blog = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogTemplate
        leyenda={post.html}
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        title={post.frontmatter.title}
      />
      {post.html}
    </Layout>
  );
};

Blog.propType = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
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
