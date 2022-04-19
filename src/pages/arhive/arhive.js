import React from "react";
import Header from "../../components/header/header";
import Board from "../../components/board/board";
import { AppRoute } from "../../const";


const Arhive = () => {
    
    return(
        <>
            <Header  />
            <main className="main__wrapper">
                <Board/>
            </main>
        </>
    )
    
}


export default Arhive;