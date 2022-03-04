// ** core
import React from 'react';
// ** css
import '../css/views/LoginScreen.css';
// ** external components
import { Button } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import { showFailedToast, showSuccessToast } from '../config/showToast';
import { Link } from 'react-router-dom';

function LoginScreen() {



        return (
                <main className='main-auth-container'>

                        <img src={require('../assets/logo-b.png')} id='logo' />

                        <div id='form-container'>
                                <div>
                                        <h2 id='text-login'>Login</h2>
                                </div>

                                <hr id='hr' />

                                {/* input  */}
                                <label id='form-label'>username or email address</label>
                                <input
                                        className='input-regular'
                                        placeholder=''
                                />

                                {/* input  */}
                                <label id='form-label'>password</label>
                                <input
                                        className='input-regular'
                                        placeholder=''
                                        type='password'
                                />

                                <div id='button-login-container'>
                                       <Link to='/home'>
                                       <Button
                                                color="primary"
                                                id='button-login'
                                                onClick={() => showFailedToast("Failed")}
                                        >
                                                Let's Go
                                        </Button>
                                       </Link>

                                        <label id='warning-text'>
                                                <b>WARNING: </b>
                                                Example@gmail.com is not a valid  email address.</label>
                                </div>
                        </div>

                        <footer id='footer-container'>
                                <h3 id='footer-text'>Don't have an account?</h3>
                               <Link to="/auth/signup">
                               <h3 id='footer-link'>signup</h3>
                               </Link>
                        </footer>


                        {/* toast : important */}
                        <ToastContainer />
                </main>
        )
}

export default LoginScreen;