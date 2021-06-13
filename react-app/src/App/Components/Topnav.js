import React from "react";
import "./Topnav.css";

import { Button } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
import { ButtonTheme } from "../Themes/theme";

// class Topnav extends React.Component {

//     render() {
//         return (
//             <div className="topnav">
//                 <Button id="home" className="base-item" href="/">Home</Button>
//                 <Button id="track" className="base-item" href="/track">Track</Button>
//                 <Button id="contact" className="base-item" href="/">Contact</Button>
//             </div>
//         )
//     }
// }

// export default Topnav;

const useStyles = ButtonTheme


export default function Topnav() {
    const classes = useStyles();

    return (
        <div className="topnav">
            <Button id="home" className={classes.header} href="/">Home</Button>
            <Button id="track" className={classes.header} href="/track">Track</Button>
            <Button id="contact" className={classes.header} href="/">Contact</Button>
        </div>
    )
}
