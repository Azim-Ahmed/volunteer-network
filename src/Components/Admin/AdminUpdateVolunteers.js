import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Table } from 'reactstrap';

const AdminUpdateVolunteers = () => {
    const [loggedInVolunteer, setLoggedInVolunteer] = useState([])



    useEffect(() => {
        fetch('http://localhost:4000/involvedvolunteerforadmin')
            .then(res => res.json())
            .then(data => setLoggedInVolunteer(data))
    }, [loggedInVolunteer])

    const handleDeleteAdmin = (id) => {
        fetch("http://localhost:4000/delete/?id=" + id, {
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
        <div>

            <div>
                <NavLink style={{
                    fontWeight: "bold",
                    color: "black"
                }} to="/allvolunteerinfo" ><p className="    mb-3"  >
                        <img src="https://i.imgur.com/Y4dWpr1.png" alt="" />
                        Volunteer Register List </p>
                </NavLink>
            </div>
            <div>
                <NavLink style={{
                    fontWeight: "bold",
                    color: "Blue"
                }} to="/storeatafromadmin" >
                    <p className="   ">
                        <img src="https://i.imgur.com/CL89rYa.png" alt="" />
                                    Add event
                                </p>
                </NavLink>
            </div>
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email Id</th>
                            <th scope="col">Registrations Date</th>
                            <th scope="col">Volunteering List</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loggedInVolunteer.map((taskItem, i) =>
                            <tr key={i}>
                                <td>#</td>
                                <td>{taskItem.name}</td>
                                <td>{taskItem.email}</td>
                                <td>{taskItem.date}</td>
                                <td>{taskItem.volunteeringName} </td>

                                <td> <Button onClick={() => handleDeleteAdmin(taskItem._id)} color="danger"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z" />
                                </svg></Button> </td>

                            </tr>
                        )
                        }

                    </tbody>


                </Table>


                )




        </div>


        </div>
    );
};

export default AdminUpdateVolunteers;