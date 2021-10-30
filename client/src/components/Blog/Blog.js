/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React,{useState} from 'react';
import './Blog.css'
function Blog (){
    const [bgcolor,setBgcolor] = useState('black')
    function handleClick(e) {
       window.location='https://aparna-u.hashnode.dev/simple-method-to-convert-text-into-speech-using-python'
        
      }
    function handleMouseOver(e){
        setBgcolor('blue')
    }
    function handleMouseLeave(){
        setBgcolor('black')
    }
    return (
        <div className="div5">
        <h2 style={{"font-family": 'Crete Round, serif', 'font-size': '48px'}}className='text-center pt-5 pb-5'>BLOG</h2>
        {/* <div>
            <img 
                src='https://aparna-u.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1601996797751%2Fj9iAErmR1.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=3840&q=75'
                alt=''
                height='300px'
                width='420px'
                
            >
            </img>
            <a href='https://aparna-u.hashnode.dev/simple-method-to-convert-text-into-speech-using-python'>Simple method to convert text into speech using python</a>
        </div> */}
        <div class=" card card-center" style={{width: '40rem'}}>
            <img className="card-img-top" onClick={handleClick} src="https://aparna-u.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1601996797751%2Fj9iAErmR1.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=3840&q=75" alt="Card image cap"/>
            <div className="card-body color-grey">
                <h5 className="card-title font-24 "> <a style={{"color":`${bgcolor}`, "text-decoration":'none', }}onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} href="https://aparna-u.hashnode.dev/simple-method-to-convert-text-into-speech-using-python" className="text-center" >Simple method to convert text into speech using python</a></h5>
                <p class="card-text">Google Text to Speech API known as the gTTS API. It converts text entered by the user, into audio which can be saved as a mp3 file.</p>
                <a href="https://aparna-u.hashnode.dev/simple-method-to-convert-text-into-speech-using-python" class="btn btn-secondary">Read more</a>
            </div>
        </div>
        </div>
    )

}

export default Blog;