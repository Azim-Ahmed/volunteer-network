import React from 'react';
import './NoMatch.css'

const NoMatch = () => {
    return (
        <div>
            <div className="SignIn-wrapper text-center " >
                <div className="SignIn-Header text-enter  m-auto " >
                    <img src="https://i.imgur.com/U7HMLBC.png" alt="" />
                </div>
                <div className="SignIn-body  " >
                    <div className="w-50 mx-auto p-5 text-center mt-5   " >
                        <h1 className="mb-5" >Wrong Component, 404</h1>

                        <p className="mt-4" >Don't have an acount  <a href="/" >Create an acount</a> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoMatch;