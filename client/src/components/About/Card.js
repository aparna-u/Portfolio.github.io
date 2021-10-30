import { Card, Button } from 'react-bootstrap'
import './About.css'
function Cards (){

    return(
<div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 col d-flex justify-content-center">
<Card style={{ width: '20rem' }}>
  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
  <Card.Body style={{ width: '20rem' }}>
    <Card.Title><h4 className=" text1"> About Me</h4></Card.Title>
    <Card.Text>
      I am a Web Developer. Passionate about Python Programming. I am currently learning Data Science. I’m looking to collaborate on Data Science
    </Card.Text>
    {/* <Button variant="primary">Go somewhere</Button> */}
  </Card.Body>
</Card>
</div>
)
}


export default Cards;