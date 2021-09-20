import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AuthPage from './pages/AuthPage';
import { UserContext, UserProvider } from './contexts/UserContext';
import BerandaPage from './pages/BerandaPage';


function App() {
  return (
    <UserProvider>
      <div className="App">
        <div className="App-container">
          <div className='App-header'>
            <div className="side-item"/>
            <div className="center-item">Rakamin Social</div>
            <div className="side-item">
              {/* bagian ini untuk menampilkan button logout jika user sudah login */}
              <UserContext.Consumer>
                {/* context consumer saat ini memiliki child berupa function yg ada didalamnya */}
                {/* function disini untuk mengecek apakah user tersedia/sudah login */}
                {(userContext) => {
                  return userContext.currentUser ? (
                    <button onClick={userContext.logout}>Logout</button>
                  ) : null;
                }}
              </UserContext.Consumer>
            </div>
          </div>
          <UserContext.Consumer>
            {/* context consumer saat ini memiliki child berupa function yg ada didalamnya */}
            {/* function disini untuk mengecek apakah user tersedia/sudah login */}
            {(userContext) => {
              return (
                <div className="content">
                  {userContext.currentUser ? <BerandaPage/> : <AuthPage />}
                </div>
              );
            }}
          </UserContext.Consumer>
        </div>
      </div>
    </UserProvider>
  );
}

export default App;
