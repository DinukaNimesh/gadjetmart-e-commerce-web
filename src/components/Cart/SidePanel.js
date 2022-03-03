// ** core
import React, { useState } from 'react';
// ** css
import '../../css/components/Cart/SidePanel.css';
// ** external components
import { Button, Badge } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import { showFailedToast, showSuccessToast } from '../../config/showToast';

function SidePanel() {
        const [isCardView, setisCardView] = useState(true);
        return (
                <section id='cart-side-panel-container'>
                        <Button
                                onClick={() => setisCardView(true)}
                                id='side-panel-item'
                                color={isCardView ? 'primary' : 'secondary'}
                        >
                                Cart View
                        </Button>

                        <Button
                                onClick={() => setisCardView(false)}
                                id='side-panel-item'
                                color={!isCardView ? 'primary' : 'secondary'}
                        >
                                Order History View
                        </Button>

                </section>
        )
}

export default SidePanel;