import { useEffect, useState } from "react";

import loginDataJson from "./_data/loginData";
import newsDataJson from "./_data/newsData";
import playerDataJson from "./_data/playerData";


import FrontNews from "./components/FrontNews/FrontNews";
import FrontInfo from "./components/FrontInfo/FrontInfo";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";


import GamePage from "./components/_GamePage/GamePage";

import "./style/global.css"
import Footer from "./components/Footer/Footer";


function App() {

  const [logged, setLogged] = useState(localStorage.getItem("logged"));

  useEffect(()=> {
    if (localStorage.getItem("login")===null){  
    localStorage.setItem("login", loginDataJson)
    }
    if (localStorage.getItem("news")===null){  
      localStorage.setItem("news", newsDataJson)
    }
    if (localStorage.getItem("playerData")===null){
      localStorage.setItem("playerData", playerDataJson)
    }
  }, []);

  const handleToUpdate = ()=>{
    setLogged(localStorage.getItem("logged"));
  }


  const logginPage = 
    <div className={"app"}>
      <Header/>
      <div style={{display: "block", margin: "auto", maxWidth: "62.5rem", position:"relative"}}>
      <Login handleToUpdate={handleToUpdate}/>
      <Register/>
      </div>
      <div className="frontData">
      <FrontInfo />
      <FrontNews />
      </div>
      <Footer/>
    </div>
  

  return (
    <div>
    {logged? <GamePage handleToUpdate={handleToUpdate}/> : logginPage}
    </div>
  );
}

export default App;
