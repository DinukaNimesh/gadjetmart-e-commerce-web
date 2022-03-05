// ** core
import React, {useEffect, useState} from 'react';
// ** css
import '../../css/components/Cart/CartView.css';
// ** external components
import {Button} from 'reactstrap';
import ListItem from './ListItem';
import {useSelector} from "react-redux";

function CartView() {
    let cart = useSelector(state => state.cartState.cart);
    const [totalPrice, setTotalPrice] = useState([]);
    const [finalPrice, setFinalPrice] = useState(0);


    // useEffect(() => {
    //     let temp = {}
    //     let arr = [];
    //     if (cart !=null) {
    //         cart.map(item => {
    //             temp = {};
    //             temp[item.name] = ''
    //             arr.push(temp)
    //         });
    //     }
    //
    //     // setTotal(arr);
    //     console.log(arr)
    // }, [cart]);

    useEffect(() => {
        let tot = 0;
        totalPrice.map(item => {
            tot += Number(item.total)
        })

        setFinalPrice(tot);
    }, [totalPrice]);


    const totalPriceHandler = (data) => {
        let {total, id} = data;
        let temp = [...totalPrice];

        // unique data
        let filter = temp.filter(item => !(item.id ===id));

         filter.push(data);

         setTotalPrice(filter);

    }

    return (
        <>

            <h5 id='cart-middle-panel-title'>Cart View</h5>

            <section id='cart-item-list-container'>
                {
                    cart && cart.map((item, index) => {
                        console.log(item)
                        return <ListItem key={index}
                                         id={index}
                                         image={item.images[0]}
                                         title={item.name}
                                         price={item.price}
                                         setTotalPrice={totalPriceHandler}
                                         data={item}/>
                    })
                }

            </section>

            <footer id='middle-panel-footer'>
                <h6 id='middle-panel-footer-total'>Current Total: LKR. {finalPrice}</h6>
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
