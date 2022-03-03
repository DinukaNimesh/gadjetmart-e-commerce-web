// ** core
import React from 'react';
// ** css
import '../../css/components/Home/CompanyPanel.css';
// ** external components
import { Button, Badge } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import { showFailedToast, showSuccessToast } from '../../config/showToast';
import CardItem from './CardItem';

function AbansPanel() {
  return (
    <main id='home-tab-panel-container'>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
    </main>
  )
}

export default AbansPanel;