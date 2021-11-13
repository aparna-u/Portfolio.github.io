import React from 'react';
import './About.css';

function About (){
    return (
        <div className="div2 pt-4">  
            <h2 style={{"font-family": 'Crete Round, serif', 'font-size': '48px'}}className="text1">  About Myself</h2>
            <br/>
            <div className='center'>
                <p className='text2'> 
                    Hi Guys 👋. 
                     <br/>I have completed my Bachelor's of Technology degree in Sept 2020.
                    <br/>I am currently working at Tata Consultancy Services as Assistant System Engineer.
                    <br/>Passionate about Web development and Python programming. 
                    <br/>I have contributed to Open source projects.  
                </p>
            </div>
            
        </div>
    )

}

export default About;