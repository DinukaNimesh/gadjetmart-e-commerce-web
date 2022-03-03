// ** core
import React from 'react';
// ** css
import '../../css/components/Home/CardItem.css';
// ** external components
import { Button, Badge } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import { showFailedToast, showSuccessToast } from '../../config/showToast';


function CardItem({
        title = "title not available",
        image = null,
        price = 'Price not available',
        descrption = "description not available description not availabledescription not availabledescription not availabledescription not availabledescription not availabledescription not availabledescription not availabledescription not availabledescription not available"
}) {

        let IMAGE = image ? image : require('../../assets/sample-f1.jpg') ;


        return (
                <section id='card-item-container'>
                        <img src={IMAGE} id='card-item-image' />

                        <h5 id='card-item-title'>{title.length < 63 ? title : (title.substring(0,62) + '...')}</h5>
                        <h6 id='card-item-price'>{price}</h6>
                        <h6 id='card-item-description'>{descrption.length < 63 ? descrption : (descrption.substring(0,150) + '...')}</h6>

                        <Button
                                        color='info'
                                        id=''
                                        onClick={() => console.log("working..")}
                                >
                                        Add to cart
                                </Button>
                </section>
        )
}

export default CardItem;