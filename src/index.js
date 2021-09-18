import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LoginPage from './LoginPage';
import reportWebVitals from './reportWebVitals';
import TodoListPage from './TodoListProps'
import TodoListPageState from './TodoListState'
import TimerComponent from './TimerComponent';

ReactDOM.render(
  <React.StrictMode>
    {/* <TodoListPageState/>
    <TimerComponent/> */}

    <LoginPage />
    </React.StrictMode>,
  document.getElementById('root-f')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
