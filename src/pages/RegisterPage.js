import React from 'react';
import '../App.css'

const RegisterPage = () => {
    //membuat state
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setconfirmPassword] = React.useState('');

    //membuat function Register
    const onRegister = () => {
        console.log('>>', username, password, confirmPassword)
        if(username.length > 0 && password.length >4 && password === confirmPassword){
        
            
        }
    }

    return (
        <div className='LoginPage-container'>
            <h1>Register</h1>
            <input className='form' placeholder='username' value={username} 
            onChange={event => setUsername(event.target.value)}/>
            <input className='form' placeholder='password' type='password' 
            value={password} 
            onChange={event => setPassword(event.target.value)}/>
            <input className='form' placeholder='confirm password' type='password' 
            value={confirmPassword} 
            onChange={event => setconfirmPassword(event.target.value)}/>
            <button className='Button' onClick={onRegister}>Register</button>
            <button className='link' style={{marginTop: 16}}>Login</button>
        </div>
            
      
    );
}

export default RegisterPage