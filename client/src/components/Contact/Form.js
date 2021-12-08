import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Container, Grid, TextField } from "@material-ui/core";
import './Contact.css'
require('dotenv').config()

const USER_ID= `${process.env.REACT_APP_USER_ID}`
const TEMPLATE_ID=`${process.env.REACT_APP_TEMPLATE_ID}`
const SERVICE_ID =`${process.env.REACT_APP_SERVICE_ID}`

export default function Form() {

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
    <Container className='pt-5'>
        <form ref={form} onSubmit={sendEmail}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField id="textfield1" fullWidth label="Name" variant="outlined"  />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField id="textfield2" fullWidth label="Email" variant="outlined"  />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField id="textfield3" fullWidth label="Message" variant="outlined" rowsMax="10" size='5'/>
        </Grid>
        <Grid item xs={12} md={12} className='center'>
        {/* <input type="submit" value="Send" onClick={handleClick}/> */}
        <div class="text-center pb-5">
            <button class="btn btn-outline-grey waves-effect waves-light" type="submit" onClick={handleClick}>
                Send
                <i class="far fa-paper-plane ml-2"></i>
            </button>
        </div>
        </Grid>
      </Grid>
      </form>
    </Container>
  );}