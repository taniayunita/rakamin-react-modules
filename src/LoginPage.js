import React from 'react'
import './LoginPage.css'


class LoginPage extends React.Component {
    // menyimpan data
    state = {username: '', password: ''};
    
    //membuat function
    onUsernameChange = (event) => {
        this.setState({username: event.target.value})
    };

    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    };

    onSubmit = () => {
        const {username, password} = this.state;
        console.log('>>', {username, password});
    }

    render() {
        return(
            <div className="container">
                <input onChange={this.onUsernameChange}/>
                <input onChange={this.onPasswordChange}/>
                <button onClick={this.onSubmit}> Log in </button>

            </div>
        )
    }
}

export default LoginPage;

