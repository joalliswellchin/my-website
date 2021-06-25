import "./Home.css";
import Header from "../Components/Header";
import { Breakpoint } from 'react-socks';

const Home = () => {
    return (
        <div className="Home">
            <div className="nav">
                <Header />
            </div>
            <div className="bgimg1">
                <div className="caption1">
                    <Breakpoint medium up>
                        <span className="border">
                            Welcome to Joel's website!
                        </span>
                    </Breakpoint>
                    <Breakpoint small down>
                        <div className="border2">
                            <span>
                                Welcome to Joel's </span>
                        </div>
                        <div className="border2">
                            <span>
                                website!</span>
                        </div>
                    </Breakpoint>
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