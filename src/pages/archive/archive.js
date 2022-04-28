import React from "react";
import Header from "../../components/header/header";
import Board from "../../components/board/board";
import { events } from "../../store";
import {observer} from 'mobx-react-lite';

const Archive = observer(() => {
    
    // const archiveEvents =  events.filter( x => x.archive )

    const {archiveData} = events

    console.log(events, archiveData)
    return(
        <>
            <Header  />
            <main className="main__wrapper">
                <Board events={archiveData}/>
                
            </main>
        </>
    )
    
})


export default Archive;