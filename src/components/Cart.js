import { memo, useState, useEffect } from 'react';
import { useDataProvider } from './DataProvide';
import Button from './Button';
function Cart() {
    const { cartItems } = useDataProvider();
    const [total, setTotal] = useState(0);
    useEffect(() => {
        let to = 0;
        for (var x of cartItems) {
            to += Number(x.price);
        }
        setTotal(to);
    }, [cartItems])
    let dis = 0;
    return (
        <>
            <div class="offcanvas offcanvas-start" id="basket" >
                <div class="offcanvas-header border-bottom">
                    <div className='offcanvas-title'>
                        <img src={require('../Assets/yellow_brand.png')} alt="cart-heading" />
                    </div>
                    <button class="btn-close btn-danger" data-bs-dismiss="offcanvas"></button>
                </div>
                <div class="offcanvas-body">
                    <div className='container'>
                        {
                            cartItems.length > 0 ? (
                                <>
                                    <h4 className='mb-3'>Your cart has {cartItems.length} items</h4>
                                    <div className='row mb-4 heading rounded p-2 justify-content-center'>
                                        <div className='col-7'>
                                            <h5 className='mb-0'>Cart Items</h5>
                                        </div>
                                        <div className='col-3'>
                                            <h5 className='mb-0'>Quantity</h5>
                                        </div>
                                    </div>
                                    {cartItems.map(item => {
                                        return (
                                            <div className='row py-2 border-bottom align-items-center'>
                                                <div className='col-8'>
                                                    <div className='row '>
                                                        <div className='col-7'>
                                                            <img src={item.path} alt="cart-item" className='img-fluid shadow-sm rounded-2' />
                                                        </div>
                                                        <div className='col-5'>
                                                            <p className='mb-2 fw-bold'>{item.name}</p>
                                                            <p className='mb-0 fw-bold cart-price'>$<span className='ms-1'>{item.price}</span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-4 text-center'>
                                                    <p className='mb-0 fw-bold'>1</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                    <h4 className='mt-5 mb-3'>Billing Details</h4>
                                    <div className='row justify-content-center billing-details gap-1'>
                                        <div className='col-7'>
                                            <h5>Total Amount:</h5>
                                        </div>
                                        <div className='col-3'>
                                            <h5>$<span className='ms-1'>{total}.00</span></h5>
                                        </div>
                                        <div className='col-7'>
                                            <h5>5% Discount:</h5>
                                        </div>
                                        <div className='col-3'>
                                            {
                                                (() => {
                                                    dis = ((total * 5) / 100).toFixed(2);
                                                    return <h5>$<span className='ms-1'>{dis}</span></h5>

                                                })()
                                            }

                                        </div>
                                        <div className='col-7'>
                                            <h5>Net Total:</h5>
                                        </div>
                                        <div className='col-3'>
                                            {
                                                <h5 className='text-decoration-underline'>$<span className='ms-1'>{(total - dis).toFixed(2)}</span></h5>
                                            }

                                        </div>
                                    </div>
                                </>
                            ) : <h5>No items added</h5>
                        }
                        <Button abled={cartItems.length === 0} className='main-btn mt-5 w-100'>
                            Order Now<i class=" ms-3 fa-solid fa-basket-shopping"></i>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(Cart);