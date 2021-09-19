//untuk melakukan perpindahan halaman
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
        </React.Fragment>

    );
}

export default AuthPage;