import React from 'react';
import './home.css';

import {Link} from 'react-router-dom';

const Home =()=>{
return(
    <div>
     
<div id="demo" className="carousel slide" data-ride="carousel">
  <ul className="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img src = {process.env.PUBLIC_URL + "/img/home2.jpg"} alt="pic1" width="100%" /> 
      <div className="carousel-caption">
        <h3>Earth</h3>
        <p>We will make a perfect world by Knowledge & Love!</p>
   </div>   
    </div>
    <div className="carousel-item">
    <img src = {process.env.PUBLIC_URL + "/img/home3.jpeg"} alt="pic1" width="100%" /> 
      <div className="carousel-caption">
        <h3>Unity</h3>
        <p>Unity is being together or at one with someone or something!</p>
      </div>   
    </div>
    <div className="carousel-item">
    <img src = {process.env.PUBLIC_URL + "/img/home4.jpg"} alt="pic1" width="100%" /> 
      <div className="carousel-caption">
        <h3>Jammu and Kashmir </h3>
        <p>We had such a great time in J&K</p>
      </div>   
    </div>
  </div>
  <a className="carousel-control-prev" href="#demo" data-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </a>
  <a className="carousel-control-next" href="#demo" data-slide="next">
    <span className="carousel-control-next-icon"></span>
  </a>
</div>  
<br/>

{/* Mission and vission */}
<div className="row mission">
  <div className="col-md-6 mission-details">
  <img src = {process.env.PUBLIC_URL + "/img/gallary16.jpg"} alt="pic1" width="100%" /> 
  </div>
  <div className="col-md-6 mission-details">
    <h3>VISION & MISSION</h3>

   <h6> Vision:</h6>

<p>To help build a more influential, equal and socially conscious society</p>

<h6>Mission:</h6>
<p>
Baba Rainath Brahm Nishulk Shiksha Seva Sansthaan drives social change by fostering an environment where young adults & children learn, lead and thrive
</p>
<br/>
<Link to="/about"><button>SEE MORE</button></Link>
  </div>
</div>

<br/>
 {/* VOLUNTEERS */}

 <div className="volunteers">
 <img src = {process.env.PUBLIC_URL + "/img/gallary01.jpg"} alt="pic1" width="20%" height="265px" className="vimg" /> 
 <img src = {process.env.PUBLIC_URL + "/img/gallary02.jpg"} alt="pic1" width="20%" height="265px"  className="vimg" /> 
 <img src = {process.env.PUBLIC_URL + "/img/gallary15.jpg"} alt="pic1" width="20%" height="265px"  className="vimg" /> 
 <img src = {process.env.PUBLIC_URL + "/img/gallary25.jpg"} alt="pic1" width="20%" height="265px" className="vimg" /> 
 <img src = {process.env.PUBLIC_URL + "/img/gallary6.jpg"} alt="pic1" width="20%" height="265px"  className="vimg" /> 
  
<div className="row Vdetails">
  <div className="col-md-3 Vbox">
<h4>1200</h4>
<span class="separator small"></span>
<p>VOLUNTEERS<br/> ENGAGED THIS YEAR</p>
  </div>

  <div className="col-md-3 Vbox">
  <h4>10</h4>
  <span class="separator small"></span>
<p>CHAPTERS<br/> ACROSS THE COUNTRY</p>
  </div>

  <div className="col-md-3 Vbox">
  <h4>15</h4>
  <span class="separator small" ></span>
<p>YEARS OF <br/> VOLUNTARY SERVICE</p>
  </div>

  <div className="col-md-3 Vbox">
  <h4>3000000</h4>
  <span class="separator small" ></span>
<p>VOLUNTEERING <br/> HOURS THIS YEAR</p>
  </div>
</div>
 </div>

<br/>

{/* Registration */}
<div className="registration">
  <div className="redetails">
<h6>JOIN US NOW</h6>
<p>Reach out to the lesser privileged and connect with awesome people like you..</p>
<br/>
< Link to="/contact"><button>REGISTER NOW</button></Link>
</div>
</div>

<br/>

{/* where we work */}
<div className="container-fluid">
<h1 className="Wwork">Where we work</h1>
<br/>
<div className="row">
  <div className="col-md-4">
  <img src = {process.env.PUBLIC_URL + "/img/homeW1.jpg"} alt="pic1" width="100%" height="265px" /> 
  <br/>  <br/>  
<h3 className="place">Gorakhpur</h3>  <br/> 
<p className="p-detail">
Baba Rainath Brahm Nishulk Shiksha Seva Sansthaan targets students who have dropped out
 of school or have  completed their formal education in Gorakhpur. These youth are
    forced to drop education mid way to cater to their family and financial needs.
    Baba Rainath Brahm Nishulk Shiksha Seva Sansthaan is also working different 
    different field in Gorakhpur Like- Child Health, Clothes For Poor Student, Cultural Programs etc.

    </p>

  </div>

  <div className="col-md-4">
  <img src = {process.env.PUBLIC_URL + "/img/homeW2.jpg"} alt="pic1" width="100%" height="265px" />
  <br/>   <br/> 
  <h3 className="place">Deoria</h3>  <br/> 
<p className="p-detail">Baba Rainath Brahm Nishulk Shiksha Seva Sansthaan targets students who have dropped out
 of school or have  completed their formal education in Deoria.  
 Our objective is to facilitate quality and holistic education by spreading 
     awareness, building self confidence in them and empower youth with hands on
      skills to enable attainment of livelihoods and a way out of poverty.</p>
  </div>

  <div className="col-md-4">
  <img src = {process.env.PUBLIC_URL + "/img/homeW3.jpg"} alt="pic1" width="100%" height="265px" />
  <br/>    <br/> 
  <h3 className="place">Kushinagar</h3>  <br/> 
<p className="p-detail">Baba Rainath Brahm Nishulk Shiksha Seva Sansthaan targets students who have dropped out
 of school or have  completed their formal education in Kushinagar.
 Over 6,000 Family from the Musahar community are living in extreme poverty in the villages of Kushinagar,
 This Institute also working for this Family.
 </p>
  </div>
</div>
</div>


    </div>
)
}

export default Home;