import React from "react";

export const Leyenda = ({ leyenda }) => {
  console.log(leyenda);
  return (
    <div>
      {leyenda.map((hola, index) => (
        <a href={`#${hola.child[0].text}`}>
          <h3>
            {`${index + 1}._`}
            {hola.child[0].text}
          </h3>
        </a>
      ))}
    </div>
  );
};
