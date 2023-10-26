import React, { Component } from "react";
import style from './Loader.module.css';

export class Loader extends Component {

    render() {
        return (
            <div className={style.loader}></div>
        )
    }
}