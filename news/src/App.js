import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

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
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      {articles.map((article, index) => {
        return (
          <div className="display-grid">
            <div className="card">
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <h5>{article.pubDate}</h5>
              <a href={article.link} target="">
                Read More
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
