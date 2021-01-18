import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';
import DonatePage from './pages/donatepage/donatepage.component.jsx';
import Header from './components/header/header.component.jsx';


function App() {
  return (
    <div>
      <Header/>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/donate' component={DonatePage}/>
    </div>
  );
}

export default App;
