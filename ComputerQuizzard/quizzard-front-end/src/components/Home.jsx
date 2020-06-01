import React, { Fragment } from 'react';
import { map } from 'lodash';
import { Link } from 'react-router-dom';
import {useAuthContext} from "../contexts/auth";

import QUIZES from '../quizes';

const Home = () => {
    const { user } = useAuthContext();
    return (
        <Fragment>
            <title>Home - Quiz App</title>
            <div id="home">
                <section>
                    <h1>Computer Quizzard!</h1>
                    <div className="play-button-container">
                        <ul>
                            {user
                                ? map(QUIZES, quiz => <li key={quiz.name}><Link className="play-button" to={{
                                    pathname: "/play/quiz",
                                    state: quiz
                                }}>Play {quiz.name}</Link></li>)
                                : <li><h4>Please login or register first</h4></li>
                            }
                        </ul>
                    </div>
                    {!user && (<div className="auth-container">
                        <Link to="/login" className="auth-buttons" id="login-button">Login</Link>
                        <Link to="/register" className="auth-buttons" id="signup-button">Register</Link>
                    </div>)}
                </section>
            </div>
        </Fragment>
    );
};

export default Home;
