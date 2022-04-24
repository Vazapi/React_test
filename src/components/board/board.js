import React from "react";
import Card from "../card/card";
import BoardFilter from "../boardFilter/boardFilter";
import LoadMore from "../loadMore/loadMore";
import NoEvent from "../noEvents/noEvent";

const Board = ({events}) => {
    
    return (
        <section className="board">
            {!(window.location.pathname === '/arhive') && <BoardFilter/>}
            
            <div className="board__events">
                {events.map(event => <Card {...event} key={event._id}/>)}
                 
                 

                 
                {/* //  <NoEvent/> */}
            </div>
            
            <LoadMore/>
            
        </section>
    );

}


export default Board;