import React from "react";
import { AppRoute } from "../../const";
import {Link} from 'react-router-dom'
import { observer } from "mobx-react-lite";
import { events } from "../../store";
import { action } from "mobx";
import { useLocation } from "react-router-dom";
const Filter = observer(() => {
    const {pathname} = useLocation();
    
    const {notArchiveData, pastData, todayData, futureData, favoriteData} = events
    
    const handleFiltred = action((e) => {
        events.filtredData = events[e.target.value]
    })

    return (
        <>
            <section className="main__filter filter">
                <input
                    type="radio"
                    id="filter__all"
                    className="filter__input visually-hidden"
                    name="filter"
                    disabled={!notArchiveData.length}
                    onChange={handleFiltred}
                    value={'notArchiveData'}
                />
                <label htmlFor="filter__all" className="filter__label">
                    Все <span className="filter__all-count count">13</span></label
                >
                <input
                    type="radio"
                    id="filter__overdue"
                    className="filter__input visually-hidden"
                    name="filter"
                    disabled={!pastData.length}
                    onChange={handleFiltred}
                    value={'pastData'}
                />
                <label htmlFor="filter__overdue" className="filter__label"
                    >Прошедшие <span className="filter__overdue-count count">{pastData.length}</span></label
                >
                <input
                    type="radio"
                    id="filter__today"
                    className="filter__input visually-hidden"
                    name="filter"
                    disabled={!todayData.length}
                    onChange={handleFiltred}
                    value={'todayData'}
                />
                <label htmlFor="filter__today" className="filter__label"
                    >Сегодня <span className="filter__today-count count">{todayData.length}</span></label
                >
                <input
                    type="radio"
                    id="filter__future"
                    className="filter__input visually-hidden"
                    name="filter"
                    disabled={!futureData.length}
                    onChange={handleFiltred}
                    value={'futureData'}
                />
                <label htmlFor="filter__future" className="filter__label"
                    >Будущие <span className="filter__future-count count">{futureData.length}</span></label
                >
                <input
                    type="radio"
                    id="filter__favorite"
                    className="filter__input visually-hidden"
                    name="filter"
                    disabled={!favoriteData.length}
                    onChange={handleFiltred}
                    value={'favoriteData'}
                />
                <label htmlFor="filter__favorite" className="filter__label"
                    >Избранное <span className="filter__favorite-count count">{favoriteData.length}</span></label
                >
                {pathname == '/'  && 
                    <Link  to={AppRoute.ADD}
                    
                    name="control"
                    className='btn-add'
                    
                    >Создать</Link>
                  }
                
        </section> 
        </>
        
    );

})


export default Filter;