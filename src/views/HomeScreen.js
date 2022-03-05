// ** core
import React, {useEffect, useState} from 'react';
// ** css
import '../css/views/HomeScreen.css';
// ** external components
import { Button, Badge } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import { showFailedToast, showSuccessToast } from '../config/showToast';
// ** import components
import CompanyPanel from '../components/Home/CompanyPanel';
import { Link } from 'react-router-dom';
import Loader from '../config/LoaderConfig';
import {getAllProductApiHandler, getSupplierApiHandler} from "../config/API";


function HomeScreen() {
        let[suppliers, setSuppliers] = useState([]);
        let[products, setProducts] = useState([]);
        let[selectSupplier, setSelectSupplier] = useState(0);


        useEffect(() => {
                (async function () {

                        let response = await getSupplierApiHandler();
                        let response2 = await getAllProductApiHandler();

                        if (response?.data?.code === '200') {
                                setSuppliers(response?.data?.result)
                        } else {
                                setSuppliers([]);
                        }

                        if (response2?.data?.code === '200') {
                                setProducts(response2?.data?.result)

                        } else {
                                setProducts([]);
                        }
                })();


        }, []);





        return (
                <main className='main-container'>

                        <header id='header-Container'>
                                <div id='logo-container'>
                                        <img src={require('../assets/logo-b.png')} id="header-logo" />
                                        <h3 id='logo-text'>Gadjet Mart</h3>
                                </div>

                                <div id='header-action-container'>
                                        <div>
                                                <img src={require('../assets/profile.png')} id="header-profile-logo" />
                                        </div>

                                        <Link to='/cart'>
                                                <img src={require('../assets/cart.png')} id="header-cart-logo" />
                                                <Badge color="warning" pill id='header-cart-badge'>3</Badge>
                                        </Link>
                                        <Link to='/'>
                                                <img src={require('../assets/log-out.png')} id="header-logout-logo" />
                                        </Link>

                                </div>
                        </header>



                        <div id='toggle-button-Container'>
                                {/* button 01 */}
                                <Button
                                        color={(selectSupplier === 0) ? "primary" : "secondary"}
                                        id='button-tab'
                                        onClick={() => setSelectSupplier(0)}
                                >
                                        {suppliers.length > 0 ? suppliers[0].name : '-'}
                                </Button>

                                {/* button 02 */}
                                <Button
                                        color={(selectSupplier === 1) ? "primary" : "secondary"}
                                        id='button-tab'
                                        onClick={() =>  setSelectSupplier(1)}
                                >
                                        {suppliers.length > 1 ? suppliers[1].name : '-'}
                                </Button>

                                {/* button 03 */}
                                <Button
                                        color={(selectSupplier === 2) ? "primary" : "secondary"}
                                        id='button-tab'
                                        onClick={() =>  setSelectSupplier(2)}
                                >
                                        {suppliers.length > 2 ? suppliers[2].name : '-'}
                                </Button>
                        </div>


                        <section>
                                <CompanyPanel products={products} supplier={suppliers[selectSupplier]}/>
                        </section>
                        <Loader isLoading={false} />

                </main>
        )
}

export default HomeScreen;
