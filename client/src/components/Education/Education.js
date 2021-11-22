/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Education.css'
import img from './education-fill.svg'
function Education (){
    return (
        <div className="div3 pt-5">
            <h2 style={{"font-family": 'Crete Round, serif', 'font-size': '48px', 'text-align':'center'}}>
                Education
            </h2>
            <div className='container pt-5'>
                <div className='row no-gutters justify-content-center flex-wrap' >
                    <div className='col icon'>
                    <img
                            src={img}
                            height='35px'

                        >
                    </img>
                    </div>
                    <div className='col description'>
                        <p> Vimal Jyothi Engineering College</p>
                        <p>B.Tech CSE, 2020</p>
                    </div>
                </div>
                <div className='row no-gutters justify-content-center flex-wrap pt-5' >
                    <div className='col icon'>
                    <img
                            src={img}
                            height='35px'

                        >
                    </img>
                    </div>
                    <div className='col description'>
                        <p> Kendriya Vidyalaya Keltron Nagar</p>
                        <p>12th,2016</p>
                    </div>
                </div>
                <div className='row no-gutters justify-content-center flex-wrap pt-5' >
                    <div className='col icon'>
                    <img
                            src={img}
                            height='35px'

                        >
                    </img>
                    </div>
                    <div className='col description '>
                        <p> Kendriya Vidyalaya Keltron Nagar</p>
                        <p>10th,2014</p>
                    </div>
                </div>
            </div>
        </div>
      
    )

}

export default Education;