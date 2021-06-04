import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Pages/Home.js";
import Track from "./Pages/Track.js";

// Main Router for Webapp
// ----------------------

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Route exact path="/" component={Home} />
                <Route exact path="/track" component={Track} />
            </div>
        </BrowserRouter>
    )
}

export default App;