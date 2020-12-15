import React from 'react';
import NavBar from './components/nav';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import './App.css';
import Sidebar from './components/sidebar';
import Dashoard from './components/dashboard';
import Profile from './components/profilePage';
import Home from './components/home'


const App =()=>{

  return(
    <div>
      <Router >
      <NavBar/>
      
      <Switch>
      <Route exact path='/' component= {Home} />
           
        <Route exact path='/dashboard' component= {Dashoard} />

<Route exact path='/profile' component= {Profile} />        
      
      </Switch>
      </Router>
    </div>

  )
}

export default App;