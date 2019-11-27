import React from 'react';
import './UperNav.css'

const UperNav=()=>{
return(
    <div>
<div className="row">
    <div className="col-md-2">
     <div className="image-logo">  
    <img src = {process.env.PUBLIC_URL + "/img/logo.jpg"} alt="pic1" width="100px"/> 
    </div>
    </div> 
    <div className="col-md-5 search">
    <div className="container h-100">
      <div className="d-flex justify-content-center h-100">
        <div className="searchbar">
          <input className="search_input" type="text" name="" placeholder="Search..." />
          <div className="search_icon"><i class="fa fa-search"> </i></div>
        </div>
      </div>
    </div>
    
        </div>

        <div className="col-md-3 social-media">
        <a href="/" className="fa fa-facebook"> </a>
<a href="/" className="fa fa-twitter"> </a>
<a href="/" className="fa fa-linkedin"> </a>
<a href="/" className="fa fa-instagram"> </a>
<a href="/" className="fa fa-skype"> </a>
<a href="/" className="fa fa-youtube"> </a>
     </div>

    <div className="col-md-2">
       <p className="donate">Donate</p> 
    </div>
    </div>


</div>

  
)

}

export default UperNav;