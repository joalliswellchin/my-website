import React from "react";
import "./Topnav.css";

import { Button } from '@material-ui/core';
import { ButtonTheme } from "../Themes/theme";


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
