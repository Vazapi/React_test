import React from "react";
import Board from "../../components/board/board";
import Filter from "../../components/filter/filter";
import Header from "../../components/header/header";
import { AppRoute } from "../../const";
import { events } from "../../store/index";
import {observer} from 'mobx-react-lite';

const Main = observer(() => {
    
    const { notArchiveData } = events;

    // console.log(notArchiveData, events)
    return(
        <>
            <Header  />
            <main className="main__wrapper">
                <Filter />
                <Board events={notArchiveData}/>
            </main>
        </>
        
    )
})

export default Main;