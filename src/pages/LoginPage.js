import React from 'react';
import '../App.css'

const LoginPage = () => {
    //membuat state
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    //membuat function Login
    const onLogin = () => {
        // console.log('>>', username, password)
        if(username.length > 0 && password.length >4){
            
        }
    }

    return (
        <div className='LoginPage-container'>
            <h1>Login</h1>
            <input className='form' placeholder='username' value={username} 
            onChange={event => setUsername(event.target.value)}/>
            <input className='form' placeholder='password' type='password' 
            value={password} 
            onChange={event => setPassword(event.target.value)}/>
            <button className='Button' onClick={onLogin}>Login</button>
            
        </div>
            
      
    );
}

export default LoginPage

