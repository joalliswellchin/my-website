import { slide as Menu } from "react-burger-menu";
import "./BurgerMenu.css";


const BurgerMenu = () => {
    return (
            <div className="BurgerMenu">
                <Menu>
                    <a id="home" className="base-item" href="/">Home</a>
                    <a id="track" className="base-item" href="/track">Track</a>
                    <a id="contact" className="base-item" href="/">Contact</a>
                </Menu>
            </div>
    )
}

export default BurgerMenu;