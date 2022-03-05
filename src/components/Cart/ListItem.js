// ** core
import React, {useEffect, useState} from 'react';
// ** css
import '../../css/components/Cart/ListItem.css';
// ** external components
import {Button} from 'reactstrap';
import {addToCartAction} from "../../redux/actions/cartAction";
import {useDispatch, useSelector} from "react-redux";

function ListItem({
                      title = 'Title hereTitle hereTitle hereTitle hereTitle here',
                      price = '250$',
                      image = null,
                      data = null,
                      id,
                      // setTotalPrice
                  }) {


    const dispatch = useDispatch();
    const [count, setcount] = useState(1);
    const [total, setTotal] = useState(0);

    const IMAGE = image ? image : require('../../assets/sample-f1.jpg');


    let cart = useSelector(state => state.cartState.cart);


    useEffect(() => {
        if (data) {
            setcount(data.count)
        }
    }, [data]);


    useEffect(() => {
        // invoke dispatch
        let demo = [...cart];

        let map = demo.map(item => {
            if (item.name === title && item.brand === data?.brand) {
                item.count = count
            }
            return item;
        });

        dispatch(addToCartAction(map));


    }, [count]);




    const removeHandler = () => {
        //nothing
    }


    return (
        <main id='list-item-container'>

            <img src={IMAGE} alt='product image' id='list-item-image'/>

            <div id='list-item'>
                <h3 id='list-item-title'>{title.length < 30 ? title : (title.substring(0, 30) + "...")}</h3>
                <h3 id='list-item-price'>LKR: {price}</h3>
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
                        count > 1 && setcount(val => val - 1);
                    }}
                >
                    -
                </Button>


                <Button
                    id='close-button'
                    color='secondary'
                    onClick={removeHandler}
                >
                    X
                </Button>
            </div>

        </main>
    )
}

export default ListItem
