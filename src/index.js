import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LoginPage from './LoginPage';
import reportWebVitals from './reportWebVitals';
import TodoListPage from './TodoListProps'
import TodoListPageState from './TodoListState'
import TimerComponent from './TimerComponent';
import {ThemeProvider} from './contexts/ThemeContext';
import Header from './Header';

ReactDOM.render(
  <React.StrictMode>
    {/* membuat ThemeProvider sebagai parent dan yang ada didalamnya merupakan child (ini untuk hands on- state management) */}
    
    <ThemeProvider>
    <Header />
    <TodoListPageState/>
    
    {/* <TimerComponent/>
    <LoginPage /> */}
    </ThemeProvider>
    </React.StrictMode>,
  document.getElementById('root-f')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
