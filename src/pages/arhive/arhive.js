import React from "react";
import Header from "../../components/header/header";
import Board from "../../components/board/board";
import { AppRoute } from "../../const";


const Arhive = ({events}) => {
    
    const archiveEvents =  events.filter( x => x.archive )
    return(
        <>
            <Header  />
            <main className="main__wrapper">
                <Board events={archiveEvents}/>
            </main>
        </>
    )
    
}


export default Arhive;