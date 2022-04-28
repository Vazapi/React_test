import React from "react";
import { events } from "../../store";
import { Link} from 'react-router-dom' 
import ClearBtn from "../clearBtn/clearBtn";
const Header = () => {
    
    let pathMain = window.location.pathname;
    let pathArchive = window.location.pathname;
    return (
        <section className="main__header">
            <section className="main__header-wrap">
                <span className="main__header-logo">SomeList</span>
                <div className="main__header-group-lnk">
                    <Link to="/" className={`main__header-lnk ${pathMain == '/' && 'lnk-active'}`}>События</Link>
                    <Link to="/archive" className={`main__header-lnk ${pathArchive=='/archive' && 'lnk-active'}`}>Архив</Link>
                </div>
                {pathMain =='/archive' && <ClearBtn/>}
            </section>
        </section>
    );

}

export default Header;