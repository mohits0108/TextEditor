import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'; 
import Textform from './components/Textform';
import React, {useState} from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);
  
  const showAlert=(message,type)=>
  {
     setalert({
      msg:message,
      type:type
     })
     setTimeout(() => {
      setalert(null);
     }, 2000);
  }
  const togglemode=()=>{
    if(mode==='light')
    {
      setmode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("dark mode is enabled","success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode is enabled","success");
    }
  }
  
  return (
    <>
   <Router> 
  <Navbar  mode={mode} togglemode={togglemode}/>
  <Alert alert={alert}/>
  <div className="container my-3">
   <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/"> 
          <Textform heading='Enter text to analyse' showAlert={showAlert} mode={mode}/> 
           </Route>
  </Switch> 
  </div>
   </Router> 
  </>
  );
}

export default App;
