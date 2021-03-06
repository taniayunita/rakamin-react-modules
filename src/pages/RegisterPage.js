import React from 'react';
import '../App.css'
import { UserContext } from '../contexts/UserContext';

const RegisterPage = () => {
    //implementasi penggunaan user context
    const userContext = React.useContext(UserContext);

  
    //membuat state
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setconfirmPassword] = React.useState('');

    //membuat function Register
    const onRegister = () => {
        // console.log('>>', username, password, confirmPassword)
        if(
            username.length > 0 && 
            password.length >4
            ) {
                if(password !== confirmPassword){
                    alert('Password yang anda masukkan tidak sama')
                    //return akan membuat tidak lanjut ke halaman selanjutnya
                    return;
                }
               //memanggil register function dari user context
               userContext.register(username,password);

               //memanggil login function dari user context agar setelah regis lgsg masuk halaman beranda
               userContext.login(username, password);

            }
    };

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
            
        </div>
            
      
    );
}

export default RegisterPage