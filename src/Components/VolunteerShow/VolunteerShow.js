import React from 'react';
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col } from 'reactstrap';

const VolunteerShow = ({ taskItem }) => {
  const { date, volunteeringName, _id, volunteeringPhoto } = taskItem
  const handleDelete = (id) => {
    fetch("https://sheltered-ravine-14450.herokuapp.com/delete/?id=" + id, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(result => {
        if (result) {
          console.log(result);

        }
      })
  }
  return (
    <Col md={4}>
      <Card>
        <CardImg top width="100%" src={volunteeringPhoto} alt="Card image cap" />
        <CardBody>
          <CardTitle>{volunteeringName}</CardTitle>
          <CardText>Your starting Date {date}</CardText>
          <Button onClick={() => handleDelete(_id)} color="info">Cancel</Button>
        </CardBody>
      </Card>
    </Col>

  );
};

export default VolunteerShow;