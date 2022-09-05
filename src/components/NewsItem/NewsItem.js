import React from "react";

export const NewsItem = ({ title, description, url, urlToImage }) => {
  return (
    <div>
      <div className="card">
        <div className="card-header">
          <img style={{ height: 200 }} src={urlToImage} alt={title} />
        </div>
        <div className="card-body">
          <h4>{title}</h4>
          <p>{description}</p>
          <div className="news-btn">
            <a href={url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
