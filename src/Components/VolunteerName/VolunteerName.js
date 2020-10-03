import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, Container } from 'reactstrap';


const VolunteerName = () => {
  return (
    <Container>
      <Card>
        <CardImg width="300px" height="300px" src={'https://i.ibb.co/svWhBjv/Rectangle-26.png'} alt="Card image cap" />
        <CardImgOverlay>
          <CardTitle><h1>Bed Room</h1></CardTitle>


        </CardImgOverlay>
      </Card>
    </Container>
  );
};

export default VolunteerName;