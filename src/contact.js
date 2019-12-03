import React from 'react';
import './contact.css';

const Contact =()=>{
return(
    <div>

<section className="contact pt-100 pb-100" id="contact">
         <div className="container">
            <div className="row">
               <div className="col-xl-6 mx-auto text-center">
                  <div className="section-title mb-100">
                     <p>get in touch</p>
                     <h4>contact us</h4>
                  </div>
               </div>
            </div>
            <div className="row text-center">
                  <div className="col-md-8">
                     <form action="#" className="contact-form">
                        <div className="row">
                           <div className="col-xl-6">
                              <input type="text" placeholder="name"/>
                           </div>
                           <div className="col-xl-6">
                              <input type="text" placeholder="email"/>
                           </div>
                           <div className="col-xl-6">
                              <input type="text" placeholder="subject"/>
                           </div>
                           <div className="col-xl-6">
                              <input type="text" placeholder="telephone"/>
                           </div>
                           
                           <div className="col-xl-12">
                           <br/>
                              <textarea placeholder="message" cols="30" rows="10"></textarea>
                              <input type="submit" value="send message"/>
                           </div>
                        </div>
                     </form>
                  </div>
                  <div className="col-md-4">
                     <div className="single-contact">
                        <i className="fa fa-map-marker"></i>
                        <h5>Address</h5>
                        <p>Near Savitri nursing home,Salempur Road,Sonda,Deoria, U.P. </p>
                     </div>
                     <div className="single-contact">
                        <i className="fa fa-phone"></i>
                        <h5>Phone</h5>
                        <p>8382049087, 9451980815</p>
                     </div>
                     <div className="single-contact">
                        <i className="fa fa-envelope"></i>
                        <h5>Email</h5>
                        <p>babarainathbramhasewasanstha@gmail.com</p>
                     </div>
                  </div>
            </div>
         </div>
      </section>

    </div>
)
}

export default Contact;