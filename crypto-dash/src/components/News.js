import {useEffect, useState} from 'react'
import axios from 'axios'
const News = () => {

  const [articles, setArticles] = useState(null)

  useEffect(() => {

    const options = {
    method: 'GET',
    url: 'https://crypto-news-live3.p.rapidapi.com/news',
    headers: {
      'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
    setArticles(response.data)
  }).catch(function (error) {
    console.error(error);
  });
  }, [])

  const first7Articles = articles?.slice(0,7)

  return (
    <div className = "news">
      <h2>News</h2>
      {first7Articles?.map( (article, _index) => (
      <div key = {_index}>
        <a href={article.url}><p>{article.title}</p></a>
       
        </div>))}
    </div>
  );
}

export default News;