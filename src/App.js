import React, { Component } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import Projectdetails from './components/projects/Projectdetails'
import Signin from './components/auth/Signin'
import Signup from './components/auth/Signup'
import Createproject from './components/projects/Createproject'
//import { CSSTransition, TransitionGroup,} from 'react-transition-group';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Navbar></Navbar>
        
        <Switch >
          <Route exact path='/' component={Dashboard}/>
          <Route path='/project/:id' component={Projectdetails}/>
          <Route path='/signin' component={Signin}/>  
          <Route path='/signup' component={Signup}/>  
          <Route path='/createproject' component={Createproject}/>       
        </Switch>
       
      </div>
        
      
      </BrowserRouter>
    );
  }
}

export default App;
