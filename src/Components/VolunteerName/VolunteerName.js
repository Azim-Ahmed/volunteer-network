import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardTitle, CardImg, CardImgOverlay, Container, Row, Col } from 'reactstrap';


const VolunteerName = (props) => {
  const { name, photo, id } = props.task
  return (


    <Col md={3}>
      <Link to={`/registration/${id}`}>
        <Card>
          <CardImg width="300px" height="300px" src={photo} alt="Card image cap" />
          <CardImgOverlay>
            <CardTitle><h1>{name}</h1></CardTitle>
          </CardImgOverlay>
        </Card>
      </Link>
    </Col>

  );
};

export default VolunteerName;