import React, { useEffect, useState } from "react";
import NewsList from "../NewsList/NewsList";
import { getNewsAsync } from "../../services/newsapiservice";

export const News = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [country, setCountry] = useState("de");
  const [category, setCategory] = useState("general");
  const [filter, setFilter] = useState("top-headlines");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //getNews(country, category)
  useEffect(() => {
    setLoading(true);
    getNewsAsync(filter, country, category)
      .then((data) => {
        setNewsItems(data.articles);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        console.log(error);
        setLoading(false);
      });
  }, [country, category, filter]);

  return (
    <div className="news">
      <p>News</p>
      <NewsList newsItems={newsItems} />
    </div>
  );
};

export default News;
