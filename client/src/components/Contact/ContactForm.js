import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'
require('dotenv').config()


const USER_ID= `${process.env.REACT_APP_USER_ID}`
const TEMPLATE_ID=`${process.env.REACT_APP_TEMPLATE_ID}`
const SERVICE_ID =`${process.env.REACT_APP_SERVICE_ID}`


const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(`${SERVICE_ID}`, `${TEMPLATE_ID}`, form.current, `${USER_ID}`)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  function handleClick(){
    var name =document.getElementById('textfield1').value;
    var message =document.getElementById('textfield3').value;
    var email = document.getElementById('textfield2').value;
    document.getElementById("textfield1").value = "";
    document.getElementById("textfield2").value = "";
    document.getElementById("textfield3").value = "";
    if(name && message && email){
    alert("Message is sent")
    name=''
    message=''
    email=''
    }

  }

  return (
    <div className='pt-5'> 
    <form ref={form} onSubmit={sendEmail}>
    <div className='pb-4 size'>
      {/* <label>Name</label> */}
      <input type="text" id="textfield1" name="user_name" placeholder='Name' size="50" required/>
    </div>
    <div className='size'>
      {/* <label>Email</label> */}
      <input type="email" id="textfield2" name="user_email" placeholder='Email' size="50" required/>
    </div>
      <br/>
    <div className='pb-4 cols'>
      {/* <label>Message</label> */}
      <textarea name="message" id="textfield3" placeholder='Message'  cols="50" required/>
    </div>
    <div style={{color:'grey'}}>
      <input type="submit" value="Send" onClick={handleClick}/>
    </div>
    </form>
    </div>
  );

  
};

export default ContactForm;

