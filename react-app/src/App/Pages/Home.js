import "./Home.css"
import Header from "../Components/Header";

const Home = () => {
    return (
        <div className="Home">
            <div className="nav">
                <Header />
            </div>
            <div className="bgimg1">
                <div className="caption1">
                    <span className="border">
                        Welcome to Joel's website!
                    </span>
                </div>
            </div>
            <div className="caption2">
                What is my motto
            </div>
            <div className="caption3">
                What do I enjoy
            </div>

        </div>
    )
}

export default Home;