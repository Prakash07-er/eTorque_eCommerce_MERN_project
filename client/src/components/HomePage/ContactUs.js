import React from 'react'
import emailjs from 'emailjs-com'
import M from 'materialize-css'

function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('GMAIL', 'template_0gty2yr', e.target, 'user_3SQGDv5jX5tRGXUoi3mMD')
          .then((result) => {
              M.toast({html: "I've received your message I'll reply you ASAP" , classes: " teal lighten-2"})
              alert("I've received your message I'll reply you ASAP")
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }

    return (
        <div className="contactUs_main" data-aos="fade-up" id="contact_us_form">
            
            <section className="contact_us mb-4 container " data-aos="fade-up">
            
                <h2 className="h1-responsive font-weight-bold text-center my-4 mt-4">Contact us</h2>
                
                <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                    a matter of hours to help you.</p>

                <div className="row">

                    
                    <div className="col-md-9 mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form" action="mail.php" method="POST" 
                         onSubmit={sendEmail} data-aos="fade-right" data-aos-delay="200">

                            
                            <div className="row">

                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                      <label for="name" className="">Your name</label>
                                        <input type="text" id="name" name="name"  className="form-control contact_name" required />
                                       
                                    </div>
                                </div>
                            
                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <label for="email" className="">Your email</label>
                                        <input type="text" id="email" name="email"   className="form-control" required />
                                    </div>
                                </div>
                            

                            </div>
                        
                                <div className="col-md-12">
                                    <div className="md-form mb-0">
                                        <label for="subject" className="">Subject</label>
                                        <input type="text" id="subject" name="subject" className="form-control" required />
                                    </div>
                                </div>
                        
                            <div className="row">

                                
                                <div className="col-md-12">

                                    <div className="md-form">
                                        <label for="message">Your message</label>
                                        <textarea type="text" id="message" name="message" rows="2" className="form-control  md-textarea " required></textarea>
                                    </div>

                                </div>
                            </div>
                            
                        
                            <input type="submit" name="submit" value='Send' className="btn btn-primary my-3 contact_send" />
                       
                        </form>

                        
                    </div>
                
                    <div className="col-md-3 text-center"data-aos="fade-left" data-aos-delay="200" >
                        <ul className="list-unstyled mb-0">
                            <li><i className="fas fa-map-marker-alt fa-2x"></i>
                                <p>New Delhi, IN 94126</p>
                            </li>

                            <li><i className="fas fa-phone mt-4 fa-2x"></i>
                                <p>+ 0413 220 420 24</p>
                            </li>

                            <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                                <p>contact@e_torque.com</p>
                            </li>
                            <a href="#topbar" className="go_up">
                               <img src="https://cdn0.iconfinder.com/data/icons/flat-round-arrow-arrow-head/512/Green_Arrow_Top-512.png" alt=""></img>
                            </a>
                        </ul>
                    </div>
                    

                </div>

            </section>
            </div>
    )
}

export default ContactUs
