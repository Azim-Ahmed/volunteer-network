import React from 'react';
import './Header.css'
import logo from '../../logos/Group 1329.png'
import { Button, Container } from 'reactstrap';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <Container>

            <nav className="nav">
                <div>
                    <Link to="/home"><img className="logo" src={logo} alt="" /></Link>
                </div>
                <ul>

                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link className="btn-book" to="/search">Donation</Link>
                    </li>
                    <li>
                        <Link className="btn-book" to="/involvedvolunteer">Events</Link>
                    </li>
                    <li>
                        <Link className="btn-book" to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link className="btn-book" to="/login"> <Button size="lg" color="warning"> Login</Button> </Link>
                    </li>
                    <li>
                        <Link className="btn-book" to="/login"> <Button size="lg" color="warning"> Register</Button> </Link>
                    </li>
                    <li>
                        <Link className="btn-book" to="/admin"> <Button size="lg" color="danger"> Admin</Button> </Link>
                    </li>
                </ul>
            </nav>

            {/* <div>
         <h1 className = "headerLine">I GROW BY HELPING PEOPLE IN NEED</h1>
            <form className = 'searchArea'>
                <input required className="searchtype" placeholder=" Search for Your Volunteer Network" type="text" />
                <Button type = "submit" size="lg" color="primary">Search</Button>
            </form>
     </div> */}
 

        </Container>
    );
};

export default Header;