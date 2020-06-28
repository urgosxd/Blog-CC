import React from "react";
import PropTypes from "prop-types";

export const HTMLContent = ({ content, className }) => (
  <div style={className} dangerouslySetInnerHTML={{ __html: content }} />
);

export const ContentBlog = ({ content, className }) => (
  <div style={className}>{content}</div>
);

ContentBlog.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
};

HTMLContent.propTypes = ContentBlog.propTypes;
