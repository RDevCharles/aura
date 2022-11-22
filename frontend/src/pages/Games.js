import { useEffect, useState } from "react";
import * as GamesAPI from "../utils/games-api";
import NavBar from "../components/ui/NavBar"
import GameCard from "../components/games/GameCard";
import HeaderAd from "../components/games/Ads/HeaderAd";
import Events from "../components/events/EventList";
function Arcade(props) {
  const [gameTitles, setGameTitles] = useState([]);

  useEffect(function () {
    async function getAll() {
      setGameTitles(await GamesAPI.getAllTitles([]));
    }
    getAll();
  }, []);

  return (
    <>
    
    <NavBar/>
    <div style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
      
      <HeaderAd />
      <Events/>
          {/* <NavBar username={props.user.name} /> */}
          <div  style={{display:"flex",flexDirection:"row"}}>
          {gameTitles.map((game) => {
        return (
          <GameCard id={game._id} title={game.title} description={game.description} cover={require("../assets/images/game2.jpeg")} host={game.host} cost={game.cost} />
        );
      })}
              
          </div>
      
      </div>
      </>
  );
}

export default Arcade;
