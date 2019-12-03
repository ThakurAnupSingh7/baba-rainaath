import React from 'react';
import './footer.css';

import {Link} from 'react-router-dom';


const Footer=()=>{

    return(
        <div className="footer1">
      <footer class="section footer-classic context-dark bg-image" >
        <div class="container">
          <div class="row row-30">
            <div class="col-md-4 col-xl-5">
              <div class="pr-xl-4"><a class="brand" href="index.html"><img class="brand-logo-light" src = {process.env.PUBLIC_URL + "/img/logo.jpg"} alt="pic1" width="100px"/> </a>
                <p>We are an award-winning creative NGO, dedicated to the best result in Education, Free Health, Free Foods, Free Education for Poor Students, and Other.</p>
               
                <p class="rights"><span>©  </span><span class="copyright-year">2019</span><span> </span><span>Baba Rainath Brahm Nishulk Shiksha Seva Sansthaan</span><span>. </span><span>All Rights Reserved.</span></p>
              </div>
            </div>
            <div class="col-md-4">
              <h5>Contacts</h5>
              <dl class="contact-list">
                <dt>Address:</dt>
                <dd>Near Savitri nursing home,Salempur Road,Sonda,Deoria, U.P.</dd>
              </dl>
              <dl class="contact-list">
                <dt>email:</dt>
                <dd><a href="mailto:#">babarainathbramhasewasanstha@gmail.com</a></dd>
              </dl>
              <dl class="contact-list">
                <dt>phones:</dt>
                <dd>8382049087, 9451980815</dd>
              </dl>
            </div>
            <div class="col-md-4 col-xl-3">
              <h5>Links</h5>
              <ul class="nav-list">
              <li><Link to="/">Home</Link></li>
            <li><Link to="/about">Who we are </Link></li>
            <li><Link to="/service">What we do </Link></li>
            <li><Link to="/waytogive">Way to give </Link></li>
            <li><Link to="/contact">Contact us</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row no-gutters social-container">
          <div class="col"><a class="social-inner" href="https://www.facebook.com/rajat.socialworker/"><span class="icon mdi mdi-facebook"></span><span>Facebook</span></a></div>
          <div class="col"><a class="social-inner" href="/"><span class="icon mdi mdi-instagram"></span><span>instagram</span></a></div>
          <div class="col"><a class="social-inner" href="/"><span class="icon mdi mdi-twitter"></span><span>twitter</span></a></div>
          <div class="col"><a class="social-inner" href="/"><span class="icon mdi mdi-youtube-play"></span><span>google</span></a></div>
        </div>
      </footer>
        </div>
       
    )
}

export default Footer;
