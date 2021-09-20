import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AuthPage from './pages/AuthPage';
import { UserProvider } from './contexts/UserContext';


function App() {
  return (
    <UserProvider>
      <div className="App">
        <div className="App-container">
          <div className='App-header'>Rakamin Social</div>
          <div className='content'>
            {/* memanggil file/ component login page */}
            <AuthPage />
          </div>
        </div>
      </div>
    </UserProvider>
  );
}

export default App;
