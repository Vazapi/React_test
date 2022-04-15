import React from "react";
import Card from "../card/card";
import BoardFilter from "../boardFilter/boardFilter";
import LoadMore from "../loadMore/loadMore";
import NoEvent from "../noEvents/noEvent";
import { AppRoute } from "../../const";
const Board = ({mode}) => {
    const hasEvent = mode;
    console.log(hasEvent)
    return (
        <section className="board">
            <BoardFilter/>
            <div className="board__events">
                 {hasEvent? <Card/> 
                 :
                 <NoEvent/>}
            </div>
            {hasEvent? null 
            :<LoadMore/>}
            
        </section>
    );

}


export default Board;