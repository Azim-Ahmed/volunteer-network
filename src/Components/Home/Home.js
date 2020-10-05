import React, { useContext } from 'react';
import { useEffect } from 'react';
import { Button, Container, Row } from 'reactstrap';
import { UserVolunteerContext } from '../../App';
import VolunteerName from '../VolunteerName/VolunteerName';

const Home = () => {
    const [taskItems, setTaskItems] = useContext(UserVolunteerContext)


    useEffect(() => {
        fetch('http://localhost:4000/volunteers')
            .then(res => res.json())
            .then(data => setTaskItems(data))
    }, [])
    return (
        <Container>
            <div>
                <h1 className="headerLine">I GROW BY HELPING PEOPLE IN NEED</h1>
                <form className='searchArea'>
                    <input required className="searchtype" placeholder=" Search for Your Volunteer Network" type="text" />
                    <Button type="submit" size="lg" color="primary">Search</Button>
                </form>
            </div>
            <Row>
                {
                    taskItems.map((taskItem, i) => <VolunteerName key={i} task={taskItem}></VolunteerName>)
                }
            </Row>


        </Container>
    );
};

export default Home;