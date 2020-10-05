import React, { useContext } from 'react';
import './Header.css'
import logo from '../../logos/Group 1329.png'
import { Button, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';



const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
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
                        {
                            loggedInUser.email ? <h6 style={{ display: "inline", background: "salmon", borderRadius: "2px", padding: "5px" }}>{loggedInUser.name}</h6> : <Link className="btn-book" to="/home"> <Button size="lg" color="warning"> Register</Button> </Link>
                        }
                    </li>
                    <li>
                        <Link className="btn-book" to="/admin"> <Button size="lg" color="danger"> Admin</Button> </Link>
                    </li>
                </ul>
            </nav>
        </Container>
    );
};

export default Header;