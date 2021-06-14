import "./Home.css";
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
            <div className="bgimg2">
                <div className="caption2 title">
                    Who I am
                </div>
                <div className="caption2 p1">
                    Hello
                </div>
            </div>
            <div className="bgimg3">
                <div className="caption3 title">
                    What is my motto
                </div>
                <div className="caption3 p1">
                    Hello
                </div>
            </div>
            <div className="bgimg1">
                <div className="caption4 title">
                    What do I enjoy
                </div>
                <div className="caption4 p1">
                    Hello
                </div>
            </div>
        </div>
    )
}

export default Home;