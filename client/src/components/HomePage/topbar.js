import React from 'react';
import {Link} from 'react-router-dom'
export default function Topbar() {
    return (<>
       
    <section id="topbar" class="d-flex align-items-center">
        <div class="contact-info d-flex align-items-center">
            <i class="far fa-envelope">  <Link>contact@example.com</Link></i>
            <i class="fas fa-mobile-alt">  <span>+1 5589 55488 55</span></i>
        </div>
        <div class="social-links d-none d-md-flex align-items-center">
            <Link to="/" class="twitter"> <i class="fab fa-twitter-square"></i></Link>
            <Link to="/" class="facebook"> <i class="fab fa-facebook"></i></Link>
            <Link to="/" class="facebook"> <i class="fab fa-instagram-square"></i></Link>
            <Link to="/" class="linkedin"> <i class="fab fa-linkedin"></i></Link>

        </div>
    </section>
    
    </>)
}
