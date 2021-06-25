import Header from "../Components/Header";
import "./Tech.css";

const Tech = () => {
    return (
        <div className="Tech">
            <div className="nav">
                <Header />
            </div>
            <div className="xfer">
                <a href="/tech/track">
                    <button className="xfer1">
                        Go to track
                    </button>
                </a>
                <a href="/tech/project">
                    <button className="xfer2">
                        Go to projects
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Tech;