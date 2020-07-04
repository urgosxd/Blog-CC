import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";

export const PostReciente = ({ tipo, title, autor, dateTime, description }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allImageSharp {
        edges {
          node {
            id
            fluid(maxWidth: 120, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);
  console.log(data);

  const ArrayIMG = data.allImageSharp.edges;

  const IMG1 = ArrayIMG[0].node.fluid.src;
  const IMG2 = ArrayIMG[1].node.fluid.src;

  return (
    <Baner tipo={tipo} img={IMG1} img2={IMG2}>
      <h5>Ultima Publicacion</h5> <h3>{dateTime}</h3>
      <div>
        <div>
          <h2>{tipo}</h2>
          <h4>{title}</h4>
        </div>
        <div>
          <p>{description}</p>
          <button></button>
          <h2>{autor}</h2>
        </div>
      </div>
    </Baner>
  );
};

PostReciente.propTypes = {
  tipo: PropTypes.string,
  title: PropTypes.string,
  autor: PropTypes.string,
  dateTime: PropTypes.string,
};

const Baner = styled.div`
  background: ${(props) =>
    props.tipo ? `url(${props.img})` : `url(${props.img2})`};
  background-position: center;
  background-repeat: no-repeat;
`;
