import React, { useRef, useState, useEffect } from "react";
import EventCard from "./EventCard";
import { getEvents } from "../../utils/users-api";

export default function EventList() {
    const [eventsState, setEventsState] = useState([]);

    useEffect(() => {
      async function getAllEvents() {
        let events = await getEvents();
        setEventsState(events);
      }
        getAllEvents();
        console.log(eventsState)
  },[])
  
  
  
    return (
        <div style={{position: 'absolute', left: 0, top:"8rem"}}>
            <h1 style={{margin:"2rem 0rem 0rem 4rem"}}>Events</h1>
            {
            eventsState.map(event => {
                return (
                    <EventCard title={event.title} />)
            })
        }</div>

    )
};