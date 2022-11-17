export default function CoinButton(props) {
    return (
        <div
        style={{
          color: "white",
          marginTop: "2rem",
          backgroundColor: "gold",
          width: "6rem",
          height: "2rem",
          borderRadius: ".3rem",
          top: 10,
          display:"flex", flexDirection:"row", justifyContent:"start", alignItems:"center",
        }}
       
      >
         <img style={{ height:"2rem", marginRight:".5rem"}} src={require("../../assets/images/coins.png")}/>
            <p style={{ color: "black", fontWeight: "bold", position:"relative", top:"25%" }}>{props.cost}</p>
      </div>
    )
}