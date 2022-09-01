// react async function to get news
export async function getNewsAsync(filter, country, category) {
  const newsApiUrl = `https://newsapi.org/v2/${filter}?country=${country}&category=${category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
  const response = await fetch(newsApiUrl);
  const data = await response.json();
  return data;
}
