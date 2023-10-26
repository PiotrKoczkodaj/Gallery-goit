import React, { Component } from "react";

export class Button extends Component {

    render() {
        const { loadMoreFnc } = this.props;
        return (
            <button onClick={loadMoreFnc}>LOAD MORE</button>
        )
    }
}