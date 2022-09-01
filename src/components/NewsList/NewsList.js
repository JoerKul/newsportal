import React from "react";
import NewsItem from "../NewsItem/NewsItem";

export const NewsList = ({ newsItems }) => {
  return (
    <ul>
      {newsItems.map((newsItem, index) => (
        <NewsItem key={index} {...newsItem} />
      ))}
    </ul>
  );
};

export default NewsList;
