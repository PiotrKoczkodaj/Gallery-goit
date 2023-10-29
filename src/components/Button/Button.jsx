import React, { Component } from "react";

export const Button=({ loadMoreFnc })=> {
        return (
            <button onClick={loadMoreFnc}>LOAD MORE</button>
        )
    }