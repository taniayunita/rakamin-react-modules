import React, {Component} from 'react';
import '../App.css'

//CLASS COMPONENT

export default class MyClass extends Component {

    constructor(props) {
        console.log(">> class constructor");
        super(props);
        this.state = {
            count: 0
        };
        this.handleCount = this.handleCount.bind(this);
    }

    render(){
        console.log(">> class render");

        return (
            <div>
                <h1>Class Component</h1>
                <button onClick={this.handleCount} className="Button">Count</button>
                <span> {this.state.count} times</span>
            </div>
        )
    
    }

    componentDidMount() {
        console.log("-> class componentDidMount")
    }

    componentDidUpdate() {
        console.log("-> class componentDidUpdate")

    }

    componentWillUnmount() {
        console.log("-> class componentWillUnmount")

    }

    handleCount = () => {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        });
    }




}


