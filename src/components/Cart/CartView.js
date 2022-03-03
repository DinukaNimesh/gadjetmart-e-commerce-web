// ** core
import React, { useState } from 'react';
// ** css
import '../../css/components/Cart/ListItem.css';
// ** external components
import { Button, Badge } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import { showFailedToast, showSuccessToast } from '../../config/showToast';
import ListItem from './ListItem';
function CartView() {
        return (
                <>

                        <h5 id='cart-middle-panel-title'>Cart View</h5>

                        <section id='cart-item-list-container'>
                                <ListItem />
                                <ListItem />
                                <ListItem />
                                <ListItem />
                                <ListItem />
                                <ListItem />
                                <ListItem />
                                <ListItem />
                                <ListItem />
                                <ListItem />
                        </section>

                        <footer id='middle-panel-footer'>
                                <h6 id='middle-panel-footer-total'>Current Total: 250$</h6>
                                <Button
                                        id='checkout-button'
                                        color='primary'
                                >
                                        PAY NOW
                                </Button>
                        </footer>
                </>
        )
}

export default CartView