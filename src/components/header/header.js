import React from "react";

import { Link} from 'react-router-dom' 

const Header = () => {
    
    let pathMain = window.location.pathname;
    let pathArhive = window.location.pathname;
    return (
        <section className="main__header">
            <section className="main__header-wrap">
                <span className="main__header-logo">SomeList</span>
                <div className="main__header-group-lnk">
                    <Link to="/" className={`main__header-lnk ${pathMain == '/' && 'lnk-active'}`}>События</Link>
                    <Link to="/arhive" className={`main__header-lnk ${pathArhive=='/arhive' && 'lnk-active'}`}>Архив</Link>
                </div>
            </section>
        </section>
    );

}

export default Header;