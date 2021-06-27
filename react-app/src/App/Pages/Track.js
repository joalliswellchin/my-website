import "./Track.css";
import Header from "../Components/Header";

const Track = () => {
    return (
        <div className="Track">
            <div className="nav">
                <Header />
            </div>
            <div className="timeline">
                <div className="timeline-insert display-left">
                    <div className="track-content">
                        <div className="track-content-h">Sorry</div>
                        <div className="track-content-p">This is in progress</div>
                    </div>
                </div>
                <div className="timeline-insert display-right">
                    <div className="track-content">
                        <div className="track-content-h">Sorry</div>
                        <div className="track-content-p">This is in progress</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Track;