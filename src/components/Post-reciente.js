import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import tw, { styled } from "twin.macro";

export const PostReciente = ({ tipo, heading, autor, time }) => {
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

  console.log(IMG1);

  return (
    <Baner tipo="bible" img={IMG1} img2={IMG2}>
      <h5>Ultima Publicacion</h5> <h3>Time</h3>
      <div>
        <div>
          <h2>{tipo}</h2>
          <h4>{heading}</h4>
        </div>
        <div>
          <button></button>
          <h2>{autor}</h2>
        </div>
      </div>
    </Baner>
  );
};

const Baner = styled.div`
  background: ${(props) =>
    props.tipo === "bible" ? `url(${props.img})` : `url(${props.img2})`};
  background-position: center;
  background-repeat: no-repeat;
`;
