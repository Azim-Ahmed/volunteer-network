import React from 'react';
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col } from 'reactstrap';

const VolunteerShow = ({taskItem}) => {
    const {name,description, volunteeringName, _id, volunteeringPhoto } = taskItem
    const handleDelete = (id) =>{
       fetch("http://localhost:4000/delete/?id="+id,{
           method:"DELETE",
       })
       .then(res=> res.json())
       .then(result =>{
           if(result){
console.log(result);

           }
       })
    }
    return ( 
        <Col md = {4}>   
      <Card>
        <CardImg top width="100%" src={volunteeringPhoto} alt="Card image cap" />
        <CardBody>
    <CardTitle>{volunteeringName}</CardTitle>
    <CardText>{description}</CardText>
          <Button onClick = {()=>handleDelete(_id)} color = "info">Cancel</Button>
        </CardBody>
      </Card>
    </Col>
        
    );
};

export default VolunteerShow;