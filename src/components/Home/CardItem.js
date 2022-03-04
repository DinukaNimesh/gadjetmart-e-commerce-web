// ** core
import React from 'react';
// ** css
import '../../css/components/Home/CardItem.css';
// ** external components
import {Button} from 'reactstrap';


function CardItem({
                      data = null,
                      title = "title not available",
                      image = null,
                      price = 'Price not available',
                      description = "description not available description not availabledescription not availabledescription not availabledescription not availabledescription not availabledescription not availabledescription not availabledescription not availabledescription not available"
                  }) {

    let IMAGE = image ? image : require('../../assets/sample-f1.jpg');


    return (
        <section id='card-item-container'>
            <img src={IMAGE} id='card-item-image'/>

            <h5 id='card-item-title'>{title.length < 58 ? title : (title.substring(0, 58) + '... ')} {" ["+data?.brand+ ']'}</h5>
            <div id='price-container'>
                <h6 id='card-item-price'>LKR. {price}</h6>
                <h6 id='card-item-price'>{data?.category}</h6>
            </div>
            <h6 id='card-item-description'>{description.length < 63 ? description : (description.substring(0, 150) + '...')}</h6>

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
