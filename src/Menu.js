import React from 'react';
import './MenuStyle.css';

import {Link} from 'react-router-dom';

const Menu=()=>{

return(
<div>
<div className="row">
    <div className="col-md-4">
<h1 className="logo-content">We will beat <br/>
Illiteracy together
</h1>
    </div>
<div className="col-md-8">
<div className="navbar">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">Who we are </Link></li>
            <li><Link to="/service">What we do </Link></li>
            <li><Link to="/waytogive">Way to give </Link></li>
            <li><Link to="/contact">Contact us</Link></li>
        </ul>
    </div>
</div>
</div>
   

    </div>
)


}

export default Menu;