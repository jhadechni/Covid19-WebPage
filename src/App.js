import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Navigation from './components/navigation'
import us from './components/aboutUs'
import Info from './components/info'
import Navbar from './components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    
    <Router>
      <Navbar/>
      <div className="container p-4">
      <Route exact path="/" component={Navigation}/>
      <Route path="/aboutus" component ={us}/>
      <Route path="/cases" component ={Info}/>
      <Route path="/cases/:id" component ={us}/>
      </div>
    </Router>

  );
}

export default App;
