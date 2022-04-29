import React from "react";
import { events } from "../../store";
import { Link} from 'react-router-dom' 
import ClearBtn from "../clearBtn/clearBtn";
import { useLocation } from "react-router-dom";
const Header = () => {
    
    const {pathname} = useLocation();
    
    return (
        <section className="main__header">
            <section className="main__header-wrap">
                <span className="main__header-logo">SomeList</span>
                <div className="main__header-group-lnk">
                    <Link to="/" className={`main__header-lnk ${pathname == '/' && 'lnk-active'}`}>События</Link>
                    <Link to="/archive" className={`main__header-lnk ${pathname=='/archive' && 'lnk-active'}`}>Архив</Link>
                </div>
                {pathname =='/archive' && <ClearBtn/>}
            </section>
        </section>
    );

}

export default Header;