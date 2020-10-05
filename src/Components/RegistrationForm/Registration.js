import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { UserContext, UserVolunteerContext } from '../../App'
const Registration = () => {
  const { id } = useParams()

  const [taskItems] = useContext(UserVolunteerContext)
  const [loggedInUser] = useContext(UserContext)


  const registrationDetails = taskItems.find(tasks => parseInt(tasks.id) === parseInt(id))




  const [volunteer, setVolunteer] = useState({
    name: loggedInUser.name,
    email: loggedInUser.email,
    volunteeringName: registrationDetails.name,
    volunteeringPhoto: registrationDetails.photo
  })

  const handleBlurInput = (e) => {
    const volunteerInfo = { ...volunteer };
    volunteerInfo[e.target.name] = e.target.value;
    setVolunteer(volunteerInfo);

  }
  const submitFormAllData = () => {
    fetch('http://localhost:4000/addSingleVolunteer',
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(volunteer)
      }
    )
      .then(result => {
        alert("Event Added for Volunteering")
      })

  }

  return (
    <Container style={{ textAlign: "center" }}>
      <h1>Register as a volunteer</h1>
      <Form>

        <FormGroup>

          <Label for="location">Full Name</Label>
          <Input
            type="text"
            name="name"
            defaultValue={loggedInUser.name}
            onBlur={handleBlurInput}
            placeholder=" Enter Your Full Name"
          />
        </FormGroup>
        <FormGroup>
          <Label for="location">Email</Label>
          <Input
            onBlur={handleBlurInput}
            type="location"
            name="email"
            defaultValue={loggedInUser.email}
            placeholder=" Enter your Username Or Email"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleDatetime">Date</Label>
          <Input
            type="date"
            name="date"
            onBlur={handleBlurInput}
            id="exampleDatetime"
            placeholder="date"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleDate">Description</Label>
          <Input
            type="text"
            name="description"
            onBlur={handleBlurInput}
            id="exampleDate"
            placeholder="Why do you want to involve in volunteering "
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleDate">Volunteering You Signed For
  </Label>
          <Input
            type="text"
            name="volunteeringName"
            defaultValue={registrationDetails.name}
            onBlur={handleBlurInput}
            id="exampleDate"
            placeholder="Organize Books at the Library "
          />
        </FormGroup>

        <Link to='/involvedvolunteer'><Button onClick={submitFormAllData} type="submit" size='lg' block color="warning">Registration</Button></Link>
      </Form>
    </Container>
  );
};

export default Registration;