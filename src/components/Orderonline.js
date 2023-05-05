import { memo, useEffect, useState } from 'react';
import { useDataProvider } from './DataProvide';
import { Link } from 'react-router-dom';
import pic from '../Assets/lil-lemon.jpg'

function Orderonline() {
    const { orderItems, myFun } = useDataProvider();
    const [totalItems, setTotalItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        let totalItems = 0;
        let totalPrice = 0;
        for (var item of orderItems) {
            if (item) {
                totalItems += item.qty;
                totalPrice += (Number(item.price) * item.qty);
            }
        }
        setTotalItems(totalItems);
        setTotalPrice(totalPrice);
    }, [orderItems])
    return (
        <>
            <div className='container-fluid mb-5' id="orderOnlineSection">
                <div className='row justify-content-center gap-3'>
                    <div className='col-md-4 col-6'>
                        <img src ={pic} className='img-fluid' alt='logo'/>
                    </div>
                    <div className='col-10 text-center'>
                        <h4>You don't have any Orders right now</h4>
                    </div>
                    <div className='col-10'>
                        <div className='row px-0 align-items-center justify-content-center'>
                            <div className='col-md-8 col-9'>
                                <p className='mb-0'>Order some declicious food here, Checkout our menu</p>
                            </div>
                            <div className='col-md-2 col-3 text-center'>
                                <Link to='/menu'>View Menu</Link>
                            </div>
                        </div>
                        <div className='row px-0 mt-2 align-items-center justify-content-center'>
                            <div className='col-md-8 col-9'>
                                <p className='mb-0'>Know more about our food and business</p>
                            </div>
                            <div className='col-md-2 col-3 text-center'>
                                <Link to='/menu'>Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(Orderonline);