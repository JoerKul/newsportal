import React from "react";

export const NewsItem = ({ title, description, url, urlToImage }) => {
  return (
    <li className="news-item">
      <h2>{title}</h2>
      <img style={{ height: 200 }} src={urlToImage} alt={title} />
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Read more
      </a>
    </li>
  );
};

export default NewsItem;
