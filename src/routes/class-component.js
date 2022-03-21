import React, { Component } from "react";

export default class ClassComponent extends Component {

    componentDidMount() {
        ensureProductFruitsIsReady(api => {
            console.log('PF API is ready!');
        });
    }

    render() {
        return <div>
            class component
        </div>
    }
}

function ensureProductFruitsIsReady(apiCallback) {
    window.productFruitsReady = function () {
        apiCallback(window.productFruits.api);
    }

    if (window.productFruitsIsReady) {
        apiCallback(window.productFruits.api);
    }
}