import React from "react";
import Header from "../../components/header/header";
import Filter from "../../components/filter/filter";
import AddEvent from "../../components/addEvent/addEvent";
import { AppRoute } from "../../const";
import EditEvent from "../../components/editEvent/editEvent";


const Form = () => {
    return (
        <>
        <Header/>
        <main className="main__wrapper">
                <Filter mode={AppRoute.EVENT=false}/>
                <section className="board">
                {/* <AddEvent/> */}
                <EditEvent/>
                </section>
                
                
        </main>
        
        </>
    )
}

export default Form;