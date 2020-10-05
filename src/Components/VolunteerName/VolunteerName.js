import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardTitle, CardImg, Col } from 'reactstrap';
import './VolunteerName.css'


const VolunteerName = (props) => {
  const { name, photo, id } = props.task
  return (


    <Col className="cardStyle" lg={3} md={4} >
      <Link to={`/registration/${parseInt(id)}`}>
        <Card>
          <CardImg width="300px" height="300px" src={photo} alt="Card image cap" />

          <CardTitle style={{ backgroundColor: `#${Math.floor(Math.random() * 16777215).toString((16))}` }} className="text-center textCss"><h4>{name}</h4></CardTitle>

        </Card>
      </Link>
    </Col>



  );
};

export default VolunteerName;