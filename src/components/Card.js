import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import "twin.macro";
import { PreviewCompatibleImage } from "../components";

export const Card = ({ title, tumbnail, description, link }) => {
  return (
    <div>
      <PreviewCompatibleImage imageInfo={tumbnail} />
      <h3>
        <Link>{title}</Link>
      </h3>
      <p>Fecha</p>
      <div>
        <p>{description}</p>
      </div>
      <button>
        <Link to={link}>SEGUIR LEYENDO</Link>
      </button>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  tumbnail: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  description: PropTypes.string,
  link: PropTypes.string,
};
