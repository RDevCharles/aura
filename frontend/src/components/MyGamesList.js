import MyGamesCard from "../components/MyGamesCard";

export default function MyGamesList() {
    return (
        <div style={{display:"flex", flexDirection:"row", height:"22rem", position: "relative", bottom:"7rem", left:"4rem"}}>
            <MyGamesCard />
            <MyGamesCard />
            <MyGamesCard />
            <MyGamesCard/>
        </div>
        
    )
}