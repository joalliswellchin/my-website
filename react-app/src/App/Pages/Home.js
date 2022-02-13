import "./Home.css";
import Header from "../Components/Header";
import Welcome from "../Contents/Welcome";
import { Breakpoint } from 'react-socks';
import WhoAmI from "../Contents/WhoAmI";
import MyMotto from "../Contents/MyMotto";

const Home = () => {
    return (
        <div className="Home">
            <div className="nav">
                <Header />
            </div>
            <div className="bgimg1">
                <div className="caption1">
                    <Welcome/>
                </div>
            </div>
            <div className="bgimg2">
                <div className="caption2 title">
                    <WhoAmI/>
                </div>
            </div>
            <div className="bgimg3">
                <div className="caption3 title">
                    <MyMotto/>
                </div>
            </div>
        </div>
    )
}

export default Home;