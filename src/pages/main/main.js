import React from "react";
import Board from "../../components/board/board";
import Filter from "../../components/filter/filter";
import Header from "../../components/header/header";
import { AppRoute } from "../../const";


const Main = ({events}) => {
    
    
    return(
        <>
            <Header  />
            <main className="main__wrapper">
                <Filter />
                <Board events={events}/>
            </main>
        </>
        
    )
}

export default Main;