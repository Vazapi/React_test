import React from "react";
import Card from "../card/card";
import BoardFilter from "../boardFilter/boardFilter";
import LoadMore from "../loadMore/loadMore";
import NoEvent from "../noEvents/noEvent";

const Board = () => {
    
    return (
        <section className="board">
            {!(window.location.pathname == '/arhive')? <BoardFilter/> 
            : null}
            
            <div className="board__events">
                 <Card/> 
                 <Card/>
                 <Card/>
                 <Card/>

                 
                {/* //  <NoEvent/> */}
            </div>
            
            <LoadMore/>
            
        </section>
    );

}


export default Board;