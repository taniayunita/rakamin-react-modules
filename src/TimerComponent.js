import React from "react";

class TimerComponent extends React.Component {
    state = {value :0};

    // membuat nilai state bertambah 1 setiap 1 detik menggunakan komponen componentDidMount
    componentDidMount(){
        this.timer = setInterval(
            () =>
            this.setState((current) => {
                // console.log(current);
                return {value : current.value + 1}
            }),
            //per 1 detik
            1000

        );
    }

    // membuat component agar value state yg bertambah 1 itu berhenti ketika pindah dari page tersebut
    // componentWillUnmount(){
    //     clearInterval(this.timer);
    // }
    

    render() {
        return (
            <div>
                <h3>{this.state.value}</h3>
            </div>
        );

    }
}



export default class TimerWrapper extends React.Component {
    state = {showTimer: true}

    //membuat arrow function showTimer
    showTimer = () => this.setState(current =>({showTimer: !current.showTimer}))
    render(){
        return (
            <div>
                {/* button ini akan digunakan untuk show dan hide timer agar ketika di show maka value angkanya dimulai dari nol kembali */}
                <button onClick={this.showTimer}>Refresh Timer</button>
                <h1>Halo Dunia </h1>
                <h3>Timer :{this.state.showTimer ? <TimerComponent /> : null} </h3>
            </div>
        );
        

    }
   
}

