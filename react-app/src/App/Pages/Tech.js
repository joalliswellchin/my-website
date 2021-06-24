import Header from "../Components/Header";
import "./Tech.css";

const Tech = () => {
    return (
        <div className="Tech">
            <div className="nav">
                <Header />
            </div>
            <div className="xfer">
                <button className="xfer1">
                    Go to track
                </button>
                <button className="xfer2">
                    Go to projects
                </button>
            </div>
        </div>
    )
}

export default Tech;