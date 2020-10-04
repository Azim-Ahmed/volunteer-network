import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import { Container } from 'reactstrap';



const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

     let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      const { displayName, email } = result.user;
      const loggedInUser = { name: displayName, email }
      setLoggedInUser(loggedInUser)
        history.replace(from)
      // ...
    }).catch(function (error) {

      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      console.log(errorCode, email, credential, errorMessage);

    });
  }

  return (
    <Container>

      <div style={{ textAlign: "center" }}>

        <button onClick={handleGoogleSignIn}>  <i className="fab fa-google"></i>    Continue with google
        </button>
      </div>
    </Container>
  );
};

export default Login;