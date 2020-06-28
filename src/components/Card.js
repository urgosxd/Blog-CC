import React from "react";
import { Link } from "gatsby";
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
