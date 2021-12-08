import React,{useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './Blog.css'

export default function BlogCard() {
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
      <div className="div5" id="blog">
          <h2 style={{"font-family": 'Crete Round, serif', 'font-size': '48px'}}className='text-center pt-5 pb-5'>BLOG</h2>
    <div className='center'>
    <Card sx={{ maxWidth: 400, maxHeight:600}}>
      <CardActionArea>
        <CardMedia
          onClick={handleClick}
          component="img"
          height="240"
          src="https://aparna-u.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1601996797751%2Fj9iAErmR1.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=3840&q=75" 
          alt="Card image cap"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          <a style={{"color":`${bgcolor}`, "text-decoration":'none', }}onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} href="https://aparna-u.hashnode.dev/simple-method-to-convert-text-into-speech-using-python" className="text-center" >Simple method to convert text into speech using python</a>
          </Typography>
          <Typography variant="body3" backroundColor="grey" color="text.secondary">
          Google Text to Speech API known as the gTTS API. It converts text entered by the user, into audio which can be saved as a mp3 file.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleClick}>
          Read More
        </Button>
      </CardActions>
    </Card>
    </div>
    </div>
  );
}