import Header from "../Components/Header";
import "./Tech.css";
import { Breakpoint } from 'react-socks';

const Tech = () => {
    return (
        <div className="Tech">
            <div className="nav">
                <Header />
            </div>
            <div className="xfer">
            <Breakpoint medium up>
                <a href="/tech/track">
                    <button className="xfer1">
                        Go to track
                    </button>
                </a>
                <a href="/tech/project">
                    <button className="xfer2">
                        Go to projects
                    </button>
                </a></Breakpoint>
                <Breakpoint small down>
                <a href="/tech/track">
                    <button className="xfer1-small">
                        Go to track
                    </button>
                </a>
                <a href="/tech/project">
                    <button className="xfer2-small">
                        Go to projects
                    </button>
                </a></Breakpoint>
            </div>
        </div>
    )
}

export default Tech;