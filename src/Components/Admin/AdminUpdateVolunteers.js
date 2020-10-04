import React, { useEffect, useState } from 'react'; 
import AllVolunteerInfo from './AllVolunteerInfo';

const AdminUpdateVolunteers = () => {
    const [loggedInVolunteer, setLoggedInVolunteer] = useState([])
   
    const handleAll = () => {
        
        fetch('http://localhost:4000/addAllVolunteers',
            {
                method: 'POST',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify()
            }
        )
    }


    useEffect(()=> {
        fetch('http://localhost:4000/involvedvolunteer')
        .then(res=> res.json())
        .then(data=> setLoggedInVolunteer(data))
    },[loggedInVolunteer])

    return (
        <div>
             {
                loggedInVolunteer.map((taskItem, i)=>
                 <AllVolunteerInfo taskItem = {taskItem} key = {i}>

                 </AllVolunteerInfo>
                
                )
                } 
        </div>
    );
};

export default AdminUpdateVolunteers;