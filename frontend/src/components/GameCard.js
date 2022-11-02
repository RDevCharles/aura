import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CoinButton from "../components/CoinButton";

export default function GameCard(props) {

  return (
    <Card style={{ width: '16rem', boxShadow: '0px .5px 10px', margin:"4rem 2rem 2rem 4rem"}}>
    <Card.Img style={{height:"12rem"}} variant="top" src={props.cover} />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
        {props.description}
        </Card.Text>
        <p style={{fontSize:"12px"}}>Hosted by: { props.host }</p>
        <CoinButton cost={props.cost} />
    </Card.Body>
  </Card>
  );

  const styles = {
    
  }
}
