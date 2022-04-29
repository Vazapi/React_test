import React from "react";
import Card from "../card/card";
import BoardFilter from "../boardFilter/boardFilter";
import LoadMore from "../loadMore/loadMore";
import NoEvent from "../noEvents/noEvent";
import ClearBtn from "../clearBtn/clearBtn";
import { useState } from "react";
import { useLocation } from "react-router-dom";
const Board = ({events}) => {
    const {pathname} = useLocation();
    
    const [step, setStep] = useState(10);

    const handleLoadMore = () => {
        events.length >= step ? setStep(step + 3): setStep(events.length);
    }

    return (
        <section className="board">
            {!(pathname === '/archive') && <BoardFilter />}
            
            <div className="board__events">
                {events.slice(0, step).map(event => <Card {...event} key={event._id}/>)}
                 
              
                {/* //  <NoEvent/> */}
                
            </div>
            
            <LoadMore prop={handleLoadMore}/>
            
        </section>
    );

}


export default Board;