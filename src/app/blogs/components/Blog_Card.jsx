import React from "react";

const Blog_Card = ({ image, title }) => {
  return (
    <div>
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};

export default Blog_Card;
