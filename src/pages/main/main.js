import React from "react";
import Board from "../../components/board/board";
import Filter from "../../components/filter/filter";
import Header from "../../components/header/header";
import { AppRoute } from "../../const";


const Main = () => {

    return(
        <>
            <Header mode={AppRoute.MAIN}/>
            <main className="main__wrapper">
                <Filter mode={AppRoute.EVENT=true}/>
                <Board mode={true}/>
            </main>
        </>
        
    )
}

export default Main;