import { useState, useEffect } from "react";
import "./App.css";
import Newscard from "./Components/Newscard/Newscard"
import Newsimage from "./Images/absolutvision-WYd_PkCa1BY-unsplash.jpg"
import { AiOutlineHeart } from "react-icons/ai"

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
        <div key={index} className="Container-flex">
       
          <h1>{article.title}</h1>
          <h6>{article.pubDate}</h6>
          <img src={!article.image ? Newsimage:article.image}></img>
          <p>{article.description}</p>

          <div className="Links">
            <a href={article.link}>Read more here</a>
            <button><AiOutlineHeart /></button>
          </div>
        

        </div>
      )
   }

   )}
    
  </div>;
}

export default App;
