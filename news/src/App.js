import { useState, useEffect } from "react";
import "./App.css";
import Newscard from "./Components/Newscard/Newscard"

function App() {
  const [articles, setArticles] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY_NEWS;

  // Fetching Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await fetch(
          `https://newsdata.io/api/1/news?apikey=pub_9231540a963fa511d9084f05a7cea240d392&language=en`
        );
        const data = await fetchedData.json();
        console.log(data.results);
        setArticles(data.results)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

console.log(articles)

  return <div className="App">
   
   {articles.map((article,index) => {
      return (
        <div key={index}>
        <h1>{article.title}</h1>
        <h6>{article.pubDate}</h6>
        <p>{article.description}</p>
        {/* <img>{article.image_url}</img> */}
        </div>
      )
   }

   )}
    
  </div>;
}

export default App;
