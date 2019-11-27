import React from 'react';
import Menu from './Menu';
import UperNav from './UperNav'
import Home from './home';
import About from './about';
import Service from './what-we-do';
import Waytogive from './way-to-give'
import Contact from './contact';
import Footer from './footer'


import {BrowserRouter , Route , Switch } from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
    <div>
      <UperNav/>
     <Menu/>
     <Switch>
    <Route path="/" exact component={Home}/>
     <Route path="/about" component={About}/>
   <Route path ="/service" component={Service}/>
   <Route path ="/waytogive" component={Waytogive}/>
   <Route path ="/contact" component={Contact}/>
   
 </Switch>

<br/>
<Footer/>

    </div>
    </BrowserRouter>
  );
}

export default App;
