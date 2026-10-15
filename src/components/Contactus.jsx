import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



const Contactus = () => {
 

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_f5ysmxh',      // 🔁 Replace with your actual Service ID
      'template_nsxevzk',     // 🔁 Replace with your actual Template ID
      form.current,
      'fm22xbY5U5AkcrACG'       // 🔁 Replace with your actual Public Key
    ).then(
      (result) => {
        alert("Message sent successfully!");
        console.log(result.text);
        form.current.reset();
      },
      (error) => {
        alert("Failed to send message. Try again.");
        console.log(error.text);
      }
    );
  };


  return (
    <div className='text-light bg-dark' >
    <div style={{ backgroundImage:'url("pictures/back.jpg")', backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
      <h1>GET IN TOUCH</h1>
      <p>We'd love to hear from you. Please fill out the form below or contact us via the provided details.</p>

      <section className="row">
       <div className="col-md-6" style={{ paddingLeft: "200px",}}>
      <form ref={form} onSubmit={sendEmail} className="text-start">
        <h2 className="text-success">Contact Form</h2>
        <label><b>Name</b></label> <br />
        <input type="text" name="name" className="form-control p-2" required /> <br />
        <label><b>Email</b></label> <br />
        <input type="email" name="email" className="form-control p-2" required /> <br />
        <label><b>Message</b></label> <br />
        <textarea name="message" className="form-control" required></textarea> <br />
        <input type="submit" value="Send Message" className="btn btn-primary" />
      </form>
    </div>
        <div className="col-md-6">
          <h2 className="text-info">Contact Details</h2>
          <ul style={{ listStyleType: "none" }}>
           
           
            <li><b>Phone:</b> 0706834776</li> <br />
            <li><b>Email:</b> ezekielkiprop101@gmail.com</li> <br />
            
          </ul>
        </div>
      </section>
    </div>
    </div>
  );
}

export default Contactus;