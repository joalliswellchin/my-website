// Webapp
// ----------------------
// Use this for App level changes

import "./App.css";
import Home from "./Pages/Home";
import Track from "./Pages/Track";

// Router
import { BrowserRouter, Route } from "react-router-dom";
// Make all parts mobile responsive
import  { BreakpointProvider } from 'react-socks';



const App = () => {
    return (
        <BrowserRouter>
        <BreakpointProvider>
            <div className="App">
                <Route exact path="/" component={Home} />
                <Route exact path="/track" component={Track} />
            </div>
        </BreakpointProvider>
        </BrowserRouter>
    )
}

export default App;