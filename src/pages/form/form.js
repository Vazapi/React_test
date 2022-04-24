import React from "react";
import Header from "../../components/header/header";
import Filter from "../../components/filter/filter";
import Event from "../../components/event/event";
import { AppRoute } from "../../const";


const Form = ({events}) => {
    
    return (
        <>
        <Header />
        <main className="main__wrapper">
                <Filter />
                <section className="board">
                <Event events={events}/>
                </section>
                
                
        </main>
        
        </>
    )
}

export default Form;