import React from "react";
import BurgerMenu from "./BurgerMenu";
import "./Header.css";

import  { Breakpoint } from 'react-socks';
import Topnav from "./Topnav";


class Header extends React.Component {

    render() {
        return (
        <div className="Header">
            <div className="burgermenu">
                <Breakpoint medium up>
                    <Topnav/>
                    <div className="titlename">
                        Hello!
                    </div>
                </Breakpoint>
                <Breakpoint small down>
                    <BurgerMenu/>
                    <div className="titlename">
                        Hello!
                    </div>
                </Breakpoint>
            </div>
        </div>
        )
    }
}

export default Header;