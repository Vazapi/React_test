import React from "react";
import { useState } from "react";
import moment from 'moment';
import 'moment/locale/ru'

const Event = ({events}) => {
  
    const path = window.location.pathname.slice(7)
    const itemEvent = events.filter(x => x._id.includes(path))
    
    const [{_id, theme, comment, date}] = itemEvent

    let formatDate = moment(date).format('YYYY-MM-DDThh:mm').toString();   
    
    console.log(formatDate)
  
  
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
    
  }
  // console.log(form)  
  // изменяем состояние через хук по сабмиту
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)
  }

    return (
        <form 
        onSubmit={handleSubmit} 
        className="board__form">
            <h2 className="board__title">{_id? `Редактирование события` : `Добавление события`}</h2>
            <fieldset className="board__field board__field--theme">
              <label htmlFor="theme" className="board__label board__label--theme">Тема:</label>
              <textarea
                type="form"
                className="board__input board__input--theme"
                name="theme"
                required
                
                onChange={handleFieldChange}
              >
              {path===''? null: theme}
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
                {path===''? null : comment}
              </textarea>
            </fieldset>
            <fieldset className="board__field board__field--date">
              <label htmlFor="date" className="board__label board__label--date">Дата:</label>
              <input
                type="datetime-local"
                className="board__input board__input--date"
                name="date"
                onChange={handleFieldChange}
                value={path===''? null : formatDate}
              />
            </fieldset>
            <div className="btns">
              <button type="submit" className="btn-submit">{_id? `Сохранить` : `Добавить`}</button>
              <button type="reset" className="btn-reset">Очистить</button>
            </div>
          </form>
    )
    
}

export default Event;