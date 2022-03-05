// ** core
import React, {useEffect, useState} from 'react';
// ** css
import '../../css/components/Cart/CartView.css';
// ** external components
import {Button} from 'reactstrap';
import ListItem from './ListItem';
import {useSelector} from "react-redux";
import {remove_duplicates_es6} from "../../util/customArray";

function CartView() {
    let cart = useSelector(state => state.cartState.cart);
    const [selectSuppliers, setSelectSuppliers] = useState([]);
    const [totalPrice, setTotalPrice] = useState([]);
    const [finalPrice, setFinalPrice] = useState(0);



    // useEffect(() => {
    //     let tot = 0;
    //     totalPrice.map(item => {
    //         tot += Number(item.total)
    //     })
    //
    //     setFinalPrice(tot);
    // }, [totalPrice]);


    // const totalPriceHandler = (data) => {
    //     let { id, supplier} = data;
    //     setSelectSuppliers([...selectSuppliers, ...supplier])
    //     let uniqueSup = selectSuppliers.filter(item => !(item === supplier));
    //     setSelectSuppliers(uniqueSup);
    //
    //
    //     let temp = [...totalPrice];
    //
    //     // unique data
    //     let filter = temp.filter(item => !(item.id ===id));
    //     // console.warn(filter)
    //     console.warn(temp)
    //      filter.push(data);
    //
    //      setTotalPrice(filter);
    //
    // }



    // const totalPriceHandler = (data) => {
    //     let { id, supplier} = data;
    //     setSelectSuppliers([...selectSuppliers, ...supplier])
    //     let uniqueSup = selectSuppliers.filter(item => !(item === supplier));
    //     setSelectSuppliers(uniqueSup);
    //
    //
    //     let temp = [...totalPrice];
    //
    //     // unique data
    //     let filter = temp.filter(item => !(item.id ===id));
    //     // console.warn(filter)
    //     console.warn(temp)
    //     filter.push(data);
    //
    //     setTotalPrice(filter);
    //
    // }

    useEffect(() => {
        if (cart) {

            let suppliers = [];
            let total = 0;
            cart.map(item => {
               suppliers.push(item.supplier)

                let tot = Number(item.count) * Number(item.price);
                total += tot;
            });

            let uniqueSup = remove_duplicates_es6(suppliers);
            setSelectSuppliers(uniqueSup)
            setFinalPrice(total);
            console.log(uniqueSup)
        }

    }, [cart]);









    const payNowHandler = async () => {
        let email = await localStorage.getItem('email');
        let userDto = {email};

        // let data = {
        //     userDto,
        //     totalPrice:finalPrice,
        //     shops: selectSuppliers,
        //     details: cart
        // }
    }

    console.log("cart ; ",cart)
    return (
        <>

            <h5 id='cart-middle-panel-title'>Cart View</h5>

            <section id='cart-item-list-container'>
                {
                    cart && cart.map((item, index) => {
                        return <ListItem key={index}
                                         id={index}
                                         image={item?.images[0]}
                                         title={item?.name}
                                         price={item?.price}
                                         // setTotalPrice={totalPriceHandler}
                                         data={item}/>
                    })
                }

            </section>

            <footer id='middle-panel-footer'>
                <h6 id='middle-panel-footer-total'>Current Total: LKR. {finalPrice}</h6>
                <Button
                    id='checkout-button'
                    color='primary'
                    onClick={payNowHandler}
                >
                    PAY NOW
                </Button>
            </footer>
        </>
    )
}

export default CartView
