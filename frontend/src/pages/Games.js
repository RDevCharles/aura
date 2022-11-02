import { useEffect, useState } from "react";
import * as GamesAPI from "../utils/games-api";
import NavBar from "../components/NavBar"
import Button from 'react-bootstrap/Button';

import Card from '@mui/material/Card';

import GameCard from "../components/GameCard";
function Arcade(props) {
  const [gameTitles, setGameTitles] = useState([]);

  useEffect(function () {
    async function getAll() {
      setGameTitles(await GamesAPI.getAllTitles([]));
    }
    getAll();
  }, []);

  return (
      <div style={{ height:"100%", display: "flex", flexDirection: "column", backgroundColor: "#edf5f5"}}>
          <NavBar username={props.user.name} />
          <div style={{display:"flex",flexDirection:"row"}}>
          {gameTitles.map((game) => {
        return (
            <GameCard title={game.title} description={game.description} cover={require("../assets/images/game2.jpeg")} host={game.host} cost={game.cost} />
        );
      })}
              
          </div>
      
    </div>
  );
}

export default Arcade;
