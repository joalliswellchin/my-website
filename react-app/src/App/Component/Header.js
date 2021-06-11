import React from "react";
import BurgerMenu from "./BurgerMenu";
import "./Header.css";

import  { Breakpoint} from 'react-socks';

// const Header = () => {
//     return (
//         <div className="Header">
//             <div className="sitemap">
//                     <BurgerMenu/>
//                     <div className="titlename">
//                         Hello
//                     </div>
//             </div>
//         </div>
//     )
// }

class Header extends React.Component {

    render() {
        return (
        <div className="Header">
            <div className="burgermenu">
                <Breakpoint medium up>
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