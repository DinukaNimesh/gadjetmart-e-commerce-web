// ** core
import React, { useState } from 'react';

// ** css
import '../../css/components/Cart/OrderHistory.css';

// ** external components
import { Button, Badge } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import { showFailedToast, showSuccessToast } from '../../config/showToast';
import ListItem from "./ListItem";
import HistoryItem from './HistoryItem';

function OrderHistory() {
  return (
    <>

      <h5 id='cart-middle-panel-title'>Order History View</h5>

      <section id='order-history-item-list-container'>
        <HistoryItem />
      </section>


    </>
  )
}

export default OrderHistory;
