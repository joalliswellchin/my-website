import React from "react";
import BurgerMenu from "./BurgerMenu";
import "./Header.css";

import { Breakpoint } from 'react-socks';
import Topnav from "./Topnav";


class Header extends React.Component {

    render() {
        return (
            <div className="Header">
                <Breakpoint medium up>
                    <div className="topnav">
                        <Topnav />
                    </div>
                    <div className="titlename">
                            Joalliswellchin
                    </div>
                </Breakpoint>
                <Breakpoint small down>
                    <BurgerMenu />
                    <div className="burgermenu">
                        Joalliswellchin
                    </div>
                </Breakpoint>
            </div>
        )
    }
}

export default Header;