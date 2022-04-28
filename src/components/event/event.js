import React from "react";
import { useState } from "react";
import moment from 'moment';
import 'moment/locale/ru'
import { useParams } from "react-router-dom";



const Event = ({events}) => {
    const {data} = events

    const url = useParams();
    let {id} = url;

    const [itemEvent] = data.filter(x => x._id.includes(id)) // ищем нужный объект по айди

    let formatDate = ''
    itemEvent? formatDate = moment(itemEvent.date).format('YYYY-MM-DDThh:mm').toString() : formatDate = '';
       
  
  // объявляем хук для формы
  const [form, setForm] = useState({
    theme: '',
    comment: '',
    date: new Date().toDateString()
  })
  // изменяем состояние через хук по инпуту
  const handleFieldChange = (e) => {
    const {name, value} = e.target
    setForm({
      ...form,
      [name]: value})
    console.log(form)
  }
  
  // изменяем состояние через хук по сабмиту

  
  const handleSubmit = (e) => {
    
    e.preventDefault();
   /// Если нет айдишника, создаем новую карту
    window.location.pathname ==='/event' && events.addEvent(form)

    // Если есть , то редактируем эту.
    window.location.pathname !=='/event' && events.editEvent({
      ...form,
      id: url,
      favorite: !itemEvent.favorite
    })
    window.history.back() 
  }

    return (
        <form 
        onSubmit={handleSubmit} 
        className="board__form">
            <h2 className="board__title">{window.location.pathname!=='/event'? `Редактирование события` : `Добавление события`}</h2>
            <fieldset className="board__field board__field--theme">
              <label htmlFor="theme" className="board__label board__label--theme">Тема:</label>
              <textarea
                type="form"
                className="board__input board__input--theme"
                name="theme"
                required
                
                onChange={handleFieldChange}
              >
              {itemEvent? itemEvent.theme: null}
              </textarea>
            </fieldset>
            <fieldset className="board__field board__field--comment">
              <label htmlFor="comment" className="board__label board__label--comment">Комментарий:</label>
              <textarea
                type="form"
                className="board__input board__input--comment"
                name="comment"
                required
                onChange={handleFieldChange}
              >
                {itemEvent? itemEvent.comment : null}
              </textarea>
            </fieldset>
            <fieldset className="board__field board__field--date">
              <label htmlFor="date" className="board__label board__label--date">Дата:</label>
              <input
                type="datetime-local"
                className="board__input board__input--date"
                name="date"
                onChange={handleFieldChange}
                value={itemEvent? formatDate : null}
              />
            </fieldset>
            <div className="btns">
              <button type="submit" className="btn-submit">{window.location.pathname!=='/event'? `Сохранить` : `Добавить`}</button>
              <button type="reset" className="btn-reset">Очистить</button>
            </div>
          </form>
    )
    
}

export default Event;