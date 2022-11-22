import { Link } from "react-router-dom";

export default function GameCard(props) {

  return (
    <Link to={`/games/${props.id}`}>
    <div
       style={{ width: '16rem',  margin:"4rem 2rem 2rem 4rem", borderRadius:".5rem" }}>
    <img style={{height:"10rem", width:"inherit", borderRadius:".5rem",}} variant="top" src={props.cover} />
  
      </div>  
      </Link>
  );

}
