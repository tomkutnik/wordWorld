import { useEffect, useState } from "react";
import newsDataJson from "../../_data/newsData";
import "./style/frontNews.css"

function FrontNews (){
    const [news, setNews] = useState(newsDataJson);

    useEffect(()=>{
        if(localStorage.getItem("news")!==null){
            setNews(localStorage.getItem("news"))
        }
    },[])





    const newsArr = JSON.parse(news);
    const newsList = newsArr.map((singleNews) =>
    <div className="frontNews__singleNews">
        <h2 className="frontNews__singleNews_title">{singleNews.title}</h2>
        <p className="frontNews__singleNews_text">{singleNews.text}</p>
        <span className="frontNews__singleNews_description">{singleNews.date+ " przez "+singleNews.author}</span>
    </div>)




    return(
        <div className="frontNews">
            <h1 class="frontNews__title">Najnowsze wieści:</h1>
            <div className="frontNews__list">
            {newsList}
            </div>
        </div>
    )
}

export default FrontNews