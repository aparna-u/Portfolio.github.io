/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Contact.css'
import Form from './Form.js'

function Contact (){
    return (
        <div className="div6" id='contact'>
        <h2 style={{"font-family": 'Crete Round, serif', 'font-size': '48px'}}className='text-center pt-5'>Contacting Me</h2>
        <div className='center text3'>
            <p> Feel free to talk to me about anything that bothers you. 
                If you need a helping hand, please don't hesitate to contact me.
            </p>
        </div>
        <div className='container pb-5'>
            <div className='row'>
                <a className='col px-0' href="https://twitter.com/Aparnapv123" rel="nofollow" ><img src="https://camo.githubusercontent.com/e1c2fd3bcd4ed13889ed78d1e814261a7cfbc79ae826198b7813850b15a8d956/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f747769747465722d2532333144413146322e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d74776974746572266c6f676f436f6c6f723d7768697465" /> </a>
                <a className='col px-0' href="https://aparna-u.hashnode.dev/" rel="nofollow"><img src="https://camo.githubusercontent.com/8f96745f5c52581d9fba69fe886f05b2a8c7c994618fd911fdbbb241d7f7d9d3/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f486173686e6f64652d2532333030373742352e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d486173686e6f6465266c6f676f436f6c6f723d7768697465" className="padding"/></a>
                <a className='col px-0' href="https://www.linkedin.com/in/aparna-udayakumar" rel="nofollow"><img src="https://camo.githubusercontent.com/015fef11ef07fffa4a54e3b3bcef5dd7b93f0add902973a4abf83fca80bb0bbc/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c696e6b6564696e2d626c75652e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d6c696e6b6564696e266c6f676f436f6c6f723d7768697465" className="padding"/></a>
                <a className='col px-0' href="aparnaukumar@gmail.com" rel="nofollow"><img src="https://camo.githubusercontent.com/36e8ddc2cc525629d5b25538fbd4a1ac43498b4dd3093b46eaddc98637a22210/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f676d61696c2d6331343433383f267374796c653d666f722d7468652d6261646765266c6f676f3d676d61696c266c6f676f436f6c6f723d7768697465" className="padding"/></a>
                <a className='col px-0' href="https://www.instagram.com/aparna__pv_/"><img src="https://img.shields.io/badge/-INSTAGRAM-c54670?style=for-the-badge&logo=instagram" className='padding'></img></a>
            </div>
        </div>
        <div className='pt-5 center'>
            <div className='pb-5'></div>
            <div>
            <Form/>
            </div>
        </div>
        </div>
    )

}

export default Contact;