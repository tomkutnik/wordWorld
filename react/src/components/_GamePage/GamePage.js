import {  useEffect, useState } from "react";
import playerDataJson from "../../_data/playerData";
import "./style/gamePage.css"



function GamePage({handleToUpdate}){
    const [playerInfo, setPlayerInfo] = useState(playerDataJson)
    
    
    useEffect(()=>{
    if (localStorage.getItem("playerData")!==null){
        setPlayerInfo(localStorage.getItem("playerData"));
    }},[]
    )

    let playerName;
    let playerNew;
    const playerId = JSON.parse(localStorage.getItem("loggedID"))
    const playerArr = JSON.parse(playerInfo);
    playerArr.map((player) =>
    {if(player.id === playerId)
        playerName=player.name
        playerNew=player.newChar
    })

    const logOut = () =>{
        localStorage.removeItem("loggedID");
        localStorage.removeItem("logged");  
        handleToUpdate();
    }
    

    return(
        <div className="gamePage">
                <h1>Witaj: {playerName}</h1>
                {playerNew ? "Tutaj będzie miejsce na stworzenie postaci" : "Tutaj będzie miejsce na stworzoną postać"}
                <div><button onClick={()=>logOut()}>LogOut</button></div>
        </div>
    )
}

export default GamePage