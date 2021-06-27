import "./Project.css";
import Header from "../Components/Header";
import WorkInProgress from "../Components/WorkInProgress";

const Project = () => {
    return (
        <div className="Project">
            <div className="nav">
                <Header />
            </div>
            <div className="project-content">
                <WorkInProgress />
            </div>
        </div>
    )
}

export default Project;