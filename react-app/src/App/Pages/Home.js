import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="Home">Hello World!
            <Link to={`/track`}>
                <button className="button">Track</button>
            </Link>
        </div>
    )
}

export default Home;