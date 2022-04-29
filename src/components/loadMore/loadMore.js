import React from "react";
import { useState } from "react";


const LoadMore = ({prop}) => {
    return (
        <button className="load-more" type="button" onClick={prop}>Загрузить еще</button>
    );
}

export default LoadMore;