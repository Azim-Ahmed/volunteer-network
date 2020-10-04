import React, { useContext, useState }  from 'react';
import { useEffect } from 'react';
import { Container, Row } from 'reactstrap';
import { UserContext, UserVolunteerContext } from '../../App';
import VolunteerName from '../VolunteerName/VolunteerName';

const Home = () => {
    const [taskItems, setTaskItems] = useContext(UserVolunteerContext)

    
useEffect(()=> {
    fetch('http://localhost:4000/volunteers')
    .then(res=> res.json())
    .then(data => setTaskItems(data))
},[])
    return (
        <Container>
            <Row>
            {
                taskItems.map((taskItem, i) => <VolunteerName key = {i} task = {taskItem}></VolunteerName>)
            }
            </Row>
          
            
        </Container>
    );
};

export default Home;