/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Experience.css'
import img from './laptop-fill.svg';
function Experience (){
    return (
        <div className="div4 pt-5"> 
        <h2 style={{"font-family": 'Crete Round, serif', 'font-size': '48px'}}className='text-center'>Experience</h2>
            <div className='container pt-5'>
                <div className='row no-gutters' >
                    <div className='col'>
                        <img
                            src={img}
                            height='35px'

                        >
                        </img>
                    </div>
                    <div className='col'>
                        <p> Tata Consultancy Services</p>
                        <p>Nov 2020 - Present</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Experience;