import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { Button } from 'reactstrap';


const StoreDataFromAdmin = () => {


    const [newVolunteer, setNewVolunteer] = useState({})
    const handleInput = (e) => {
        const category = { ...newVolunteer }
        category[e.target.name] = e.target.value;

        setNewVolunteer(category);
        console.log(category, newVolunteer);

    }


    const handleAll = () => {

        fetch('https://sheltered-ravine-14450.herokuapp.com/addVolunteer',
            {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(newVolunteer)
            }
        )
            .then(result => {
                alert("Event Added for Volunteering")
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
            <Form>
                <FormGroup>

                    <Label for="location">Name</Label>
                    <Input
                        type="text"
                        name="name"
                        onBlur={handleInput}
                        placeholder="Volunteering Name"
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="exampleDatetime">Photo Url</Label>
                    <Input
                        type="text"
                        name="photo"
                        onBlur={handleInput}
                        id="exampleDatetime"
                        placeholder="Enter your photo link"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="location">id</Label>
                    <Input
                        onBlur={handleInput}
                        type="number"
                        name="id"
                        placeholder=" Enter a id more than 20"
                    />
                </FormGroup>



                <Link to='/home'><Button onClick={handleAll} type="submit" size='lg' block color="warning">Registration</Button></Link>
            </Form>
        </div>
    );
};

export default StoreDataFromAdmin;