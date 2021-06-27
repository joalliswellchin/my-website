import "./WorkInProgress.css";
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';

const WorkInProgress = () => {
    return (
        <div className="WorkInProgress">
            <div className="wip-icon">
                <DirectionsRunIcon />
            </div>
            <div className="wip-h">
                Sorry!
            </div>
            <div className="wip-p">
                This is coming soon!
            </div>
        </div>
    )
}

export default WorkInProgress;