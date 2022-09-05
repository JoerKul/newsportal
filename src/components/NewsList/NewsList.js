import React from "react";
import NewsItem from "../NewsItem/NewsItem";

export const NewsList = ({ newsItems }) => {
  return (
    <div className="container">
      {newsItems.map((newsItem, index) => (
        <NewsItem key={index} {...newsItem} />
      ))}
    </div>
  );
};

export default NewsList;
