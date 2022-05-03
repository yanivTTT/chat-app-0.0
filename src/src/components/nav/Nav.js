import React, {Component} from "react";
import "./nav.css"
import logo from "./../../images/logo.jpg"
export default class nav extends Component {
    render() {
        return (
            <div className="nav">
            <div className="nav_block">
                <img src={logo}></img>
            </div>
            <div className="nav_block">
            </div>
            <div className="nav_block">
            </div>
            </div>
        )
    }
}