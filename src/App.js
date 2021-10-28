import React from 'react';
import Header from './components/Header';
import './styles.css';
//import Main from './pages/main/index';
import Routes from './routes';

const App = () =>(
  <div id='App'>
    <Header/>
    <Routes />
  </div>
);

export default App;
