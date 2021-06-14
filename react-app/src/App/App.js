// Webapp
// ----------------------
// Use this for App level changes

import "./App.css";
import Home from "./Pages/Home";
import Tech from "./Pages/Tech";
import Contact from "./Pages/Contact";

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
                <Route exact path="/tech" component={Tech} />
                <Route exact path="/contact" component={Contact} />
            </div>
        </BreakpointProvider>
        </BrowserRouter>
    )
}

export default App;