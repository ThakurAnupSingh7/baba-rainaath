import React from 'react';
import './way-to-give.css';

const Waytogive =()=>{
return(
    <div>
        <img src={process.env.PUBLIC_URL + "/img/donate.png"} alt="donate" width="100%"/>

        <div className="donate-details">
         <h2>Post or telephone</h2>
         <p>if You want to donate our institute, it is more convenient for you, you can call 
        our Donor Support team to make a online donation like (Phonpe, Gpay, Paytm etc)
         donation over the telephone. <br/> </p>
         <h6>Donor Support Team <br/>
         8382049087, 9451980815</h6>
         <p>Our opening hours are 9am-5pm weekdays.</p>
<br/>
<p>You can also send us a cheque via post to:</p>
     <h6> Baba Rainath Brahm Nishulk Shiksha Seva Sansthaan<br/>
         Village-Sonda<br/>
         Dist.-Deoria <br/>
         State-Uttar Pradesh<br/>
         Pin Code-‎274001<br/>
         India
         </h6>   
        </div>
    </div>
)
}

export default Waytogive;