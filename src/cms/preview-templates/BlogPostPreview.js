import React from "react";
import PropTypes from "prop-types";
import { BlogTemplate } from "../../templates/blog-page";

const BlogPostPreview = ({ entry, widgetFor }) => {
  return (
    <BlogTemplate
      content={widgetFor("body")}
      description={entry.getIn(["data", "description"])}
      title={entry.getIn(["data", "title"])}
    />
  );
};

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default BlogPostPreview;
