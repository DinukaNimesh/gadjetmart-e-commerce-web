// ** core
import React from 'react';
// ** css
import '../css/views/LoginScreen.css';
// ** external components
import { Button } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import { showFailedToast, showSuccessToast } from '../config/showToast';

function SignUpScreen() {
        return (
                <main className='main-container'>

                        <img src={require('../assets/logo-b.png')} id='logo' />

                        <div id='form-container'>
                                <div>
                                        <h2 id='text-login'>Signup</h2>
                                </div>

                                <hr id='hr' />

                                {/* input  */}
                                <label id='form-label'>first name</label>
                                <input
                                        className='input-regular'
                                        placeholder=''
                                />

                                {/* input  */}
                                <label id='form-label'>last name</label>
                                <input
                                        className='input-regular'
                                        placeholder=''
                                />

                                {/* input  */}
                                <label id='form-label'>address</label>
                                <input
                                        className='input-regular'
                                        placeholder=''
                                        type="text"
                                />

                                 {/* input  */}
                                 <label id='form-label'>e-mail address</label>
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

                                 {/* input  */}
                                 <label id='form-label'>retype password</label>
                                <input
                                        className='input-regular'
                                        placeholder=''
                                        type='password'
                                />

                                {/* button container */}
                                <div id='button-login-container'>
                                        <Button
                                                color="primary"
                                                id='button-login'
                                                onClick={() => showFailedToast("Failed")}
                                        >
                                                create account
                                        </Button>

                                        <label id='warning-text'>
                                                <b>WARNING: </b>
                                                Example@gmail.com is not a valid  email address.</label>
                                </div>



                        </div>


                        <footer id='footer-container'>
                                <h3 id='footer-text'>Already have an account?</h3>
                                <a id='footer-link'>login</a>
                        </footer>

                        {/* toast : important */}
                        <ToastContainer />
                </main>
        )
}

export default SignUpScreen;