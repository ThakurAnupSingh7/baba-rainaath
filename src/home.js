import React from 'react';
import './home.css';

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
<br/><br/>



<div className="container-fluid">
<h1 className="Wwork">Where we work</h1>
<br/>
<div className="row">
  <div className="col-md-4">
  <img src = {process.env.PUBLIC_URL + "/img/homeW1.jpg"} alt="pic1" width="100%" height="265px" /> 
  <br/>  <br/>  
<h3 className="place">Gorakhpur</h3>  <br/> 
<p className="p-detail">
Baaba Rainaath Brahm Nishulk Shiksha Seva Sansthaan targets students who have dropped out
 of school or have  completed their formal education in Gorakhpur. These youth are
    forced to drop education mid way to cater to their family and financial needs.
    Baaba Rainaath Brahm Nishulk Shiksha Seva Sansthaan is also working different 
    different field in Gorakhpur Like- Child Health, Clothes For Poor Student, Cultural Programs etc.

    </p>

  </div>

  <div className="col-md-4">
  <img src = {process.env.PUBLIC_URL + "/img/homeW2.jpg"} alt="pic1" width="100%" height="265px" />
  <br/>   <br/> 
  <h3 className="place">Deoria</h3>  <br/> 
<p className="p-detail">Baaba Rainaath Brahm Nishulk Shiksha Seva Sansthaan targets students who have dropped out
 of school or have  completed their formal education in Deoria.  
 Our objective is to facilitate quality and holistic education by spreading 
     awareness, building self confidence in them and empower youth with hands on
      skills to enable attainment of livelihoods and a way out of poverty.</p>
  </div>

  <div className="col-md-4">
  <img src = {process.env.PUBLIC_URL + "/img/homeW3.jpg"} alt="pic1" width="100%" height="265px" />
  <br/>    <br/> 
  <h3 className="place">Kushinagar</h3>  <br/> 
<p className="p-detail">Baaba Rainaath Brahm Nishulk Shiksha Seva Sansthaan targets students who have dropped out
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