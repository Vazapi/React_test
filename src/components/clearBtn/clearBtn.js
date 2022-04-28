import React from "react";
import './clearBtn.css';
import { events } from "../../store";

 const ClearBtn = () => {
     
 const {deleteArchiveItems, archiveData, fetch} = events


    const clearArch = (e) => {
        e.preventDefault();
        
        deleteArchiveItems()
        // .then(data => console.log(data)).catch(err=> console.log(err))
        
    }
    return (
        <button className="clearBtn" onClick={clearArch}>Очистить архив</button>
    )

}

export default ClearBtn;