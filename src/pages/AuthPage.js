//file untuk melakukan perpindahan halaman karena belum belajar routing
import React from 'react';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

function AuthPage() {

    //membuat state baru (set true untuk menampilkan halaman pertama adalah login bukan register)
    const [isLoginPage, setIsLoginPage] = React.useState(true)
    return(
        <React.Fragment>
            {/* condsional rendering untuk melihat ini halaman apa */}
            {isLoginPage ? <LoginPage /> : <RegisterPage/>}
            {/* untuk menswitch perpindahan halaman */}
            <button className='link' style={{marginTop: 16}} onClick={()=>setIsLoginPage(!isLoginPage)}>
                {isLoginPage ? 'Register':'Login'}
            </button>
        </React.Fragment>

    );
}

export default AuthPage;