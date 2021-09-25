// untuk menggunakan stae didalam function component maka diperlukan useState
import React, {useState} from 'react';
import '../App.css'
import { UserContext } from '../contexts/UserContext';
// untuk implementasi custom hook
import UseCounter from '../hook/UseCounter';


const LoginPage = () => {
    // usestae akan menghasilkan array 2 item yaitu:
    // 1. state/ value
    // 2. function untuk mengupdate nilai valuenya

    // menginisial state
    const [state, setState] = useState({
        subscribe: false,
        // like: 0,
        dislike: 0
    })

    // membuat methode untuk mengubah nilai state
    const HandleSubscribe = () => {
        setState({
            ...state,
            subscribe: !state.subscribe
        })
    }

    // Membuat methode handlelike yang functionnya diambil dari import UseCounter 
    const [like, handleLike] = UseCounter(0)


    // membuat methode untuk mengubah nilai like
    // const HandleLike = () => {
    //     setState({
    //         ...state,
    //         like: state.like + 1
    //     })
    // }

    // membuat methode untuk mengubah nilai dislike
    const HandleDislike = () => {
        setState({
            ...state,
            dislike: state.dislike + 1
        })
    }


    //menggunakan context
    const userContext = React.useContext(UserContext);
    //membuat state
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    //membuat function Login
    const onLogin = () => {
        // console.log('>>', username, password)
        if(username.length > 0 && password.length >4){
            userContext.login(username, password);
            
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

            {/* belajar implementasi hook */}
            <h1>Learning Hook</h1>
            <button className='Button' style={{margin: 6}} onClick={HandleSubscribe}>Subscribe</button>
            {/* membaca state */}
            <span>status: {JSON.stringify(state.subscribe)} </span>
            {/* <button className='Button' style={{margin: 6}} onClick={HandleLike}>Like</button> */}
            {/* menjalankan function yang diambil dari useCounter file */}
            <button className='Button' style={{margin: 6}} onClick={handleLike}>Like</button>
            {/* membaca state */}
            <span>jumlah like : {like}</span>
            <button className='Button' style={{margin: 6}} onClick={HandleDislike}>Dislike</button>
            {/* membaca state */}
            <span>jumlh dislike : {state.dislike}</span>
            
        </div>
            
      
    );
}

export default LoginPage;

