// Hands on Hook (#Component state)

// membuat Class Component State

import React, {Component}  from "react";



export default class SubscribeBox extends Component {
    //membuat state
    state = {
        subscribe: false,
        like: 0,
        dislike: 0
    }

    // membuat methode untuk mengubah nilai state
    HandleSubscribe = () => {
        this.setState({
            subscribe: !this.state.subscribe
        })
    }

    // membuat methode untuk mengubah nilai like
    HandleLike = () => {
        this.setState({
            like: this.state.like +1
        })
    }

    HandleDislike = () => {
        this.setState({
            like: this.state.dislike +1
        })
    }
}