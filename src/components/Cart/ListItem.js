// ** core
import React, { useState } from 'react';
// ** css
import '../../css/components/Cart/ListItem.css';
// ** external components
import { Button, Badge } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import { showFailedToast, showSuccessToast } from '../../config/showToast';

function ListItem({
        title = 'Title hereTitle hereTitle hereTitle hereTitle here',
        price = '250$',
        image = null
}) {


        const [count, setcount] = useState(1);

        return (
                <main id='list-item-container'>

                        <img src={require('../../assets/sample-f1.jpg')} id='list-item-image' />

                        <div id='list-item'>
                                <h3 id='list-item-title'>{title.length < 30 ? title : (title.substring(0, 30) + "...")}</h3>
                                <h3 id='list-item-price'>{price}</h3>
                        </div>

                        <div id='action-list-item'>
                                <Button
                                        id='inc-dec-button'
                                        color='warning'
                                        onClick={() => {
                                                setcount(val => val + 1);
                                        }}
                                >
                                        +
                                </Button>

                                <p id='action-value'>{count}</p>

                                <Button
                                        id='inc-dec-button'
                                        color='warning'
                                        onClick={() => {
                                                count > 0 && setcount(val => val - 1);
                                        }}
                                >
                                        -
                                </Button>


                                <Button
                                        id='close-button'
                                        color='secondary'
                                >
                                        X
                                </Button>
                        </div>

                </main>
        )
}

export default ListItem
