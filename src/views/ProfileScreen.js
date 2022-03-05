// ** core
import React, {useEffect, useState} from 'react';
// ** css
import '../css/views/ProfileScreen.css';
// ** external components
import {Badge, Button} from 'reactstrap';
import {ToastContainer} from 'react-toastify';
import {showFailedToast, showSuccessToast, showWarningToast} from '../config/showToast';
import {Link, useNavigate, } from 'react-router-dom';
import {getUserApiHandler, signInApiHandler, updateUserApiHandler} from "../config/API";
import {useSelector} from "react-redux";

function ProfileScreen() {

  let cart = useSelector(state => state.cartState.cart);
  let[firstName, setFirstName] = useState('');
  let[lastName, setLastName] = useState('');
  let[address, setAddress] = useState('');

  useEffect(() => {
    const getUser = async () => {
      let email = await localStorage.getItem('email');
      let response = await getUserApiHandler(JSON.parse(email));

      let {code, result} = response?.data;;

      if (code === '200') {
        setFirstName(result?.firstName)
        setLastName(result?.lastName)
        setAddress(result?.address)
      } else {
        setFirstName('');
        setLastName('');
        setAddress('');
      }


      // if (code === '200') {
      //   showSuccessToast("Profile has been updated!");
      // } else {
      //   showFailedToast("Profile hasn't been updated!")
      // }
    }

    getUser();

  }, []);

  const updateHandler =() => {
    if (firstName !== '' && lastName !== '' && address !== '') {
      const updateUser = async () => {
        let email = await localStorage.getItem('email');
        let data = {
          email: JSON.parse(email),
          firstName: firstName,
          lastName: lastName,
          address: address
        }
        await updateUserApiHandler(data);
      }

        updateUser();

    } else {
      showWarningToast("Required field must not be blank.");
    }

  }

  return (
    <div className='main-container'>
      <header id='header-Container'>
        <div id='logo-container'>
          <img src={require('../assets/logo-b.png')} id="header-logo" />
          <h3 id='logo-text'>Gadjet Mart</h3>
        </div>

        <div id='header-action-container'>
          {/*<Link to='/profile'>*/}
          {/*  <img src={require('../assets/profile.png')} id="header-profile-logo" />*/}
          {/*</Link>*/}

          {/*<Link to='/cart'>*/}
          {/*  <img src={require('../assets/cart.png')} id="header-cart-logo" />*/}
          {/*  {(cart && cart?.length > 0) && <Badge color="warning" pill*/}
          {/*                                        id='header-cart-badge'>{cart?.length}</Badge>}*/}
          {/*</Link>*/}
          <div></div>
          <div></div>
          <Link to='/'>
            <img src={require('../assets/log-out.png')} id="header-logout-logo" />
          </Link>

        </div>
      </header>

      <section id='middle-section'>
        <h3 id='head-text'>Profile Settings </h3>

        <main>
          <div>
            <h3 id='input-text'>first name </h3>
            <input id='input-component' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
          </div>
          <div>
            <h3 id='input-text'>last name </h3>
            <input id='input-component' value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div>
            <h3 id='input-text'>location address </h3>
            <input id='input-component' value={address} onChange={(e) => setAddress(e.target.value)}/>
          </div>

          <div>
            <Button
                color={ "primary"}
                id='button-component'
                onClick={updateHandler}
            >
             update
            </Button>
          </div>
        </main>
      </section>

      {/* toast : important */}
      <ToastContainer/>
    </div>
  )
}

export default ProfileScreen;
