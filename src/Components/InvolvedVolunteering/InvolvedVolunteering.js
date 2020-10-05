import React, { useContext, useEffect, useState } from 'react';
import { Row } from 'reactstrap';
import { UserContext } from '../../App';
import VolunteerShow from '../VolunteerShow/VolunteerShow';

const InvolvedVolunteering = () => {

    const [loggedInVolunteer, setLoggedInVolunteer] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    useEffect(() => {
        fetch('https://sheltered-ravine-14450.herokuapp.com/involvedvolunteer?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setLoggedInVolunteer(data))
    }, [loggedInVolunteer])
    return (
        <Row>
            {
                loggedInVolunteer.map((taskItem, i) => <VolunteerShow key={i} taskItem={taskItem} ></VolunteerShow>)
            }




        </Row>
    );
};

export default InvolvedVolunteering;