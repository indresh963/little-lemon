import { Link } from 'react-router-dom';
import { memo } from 'react';
import Button from './Button';
import { useDataProvider } from './DataProvide';
function Highlight() {
    const items = [
        {
            name: "Cheese Burger",
            path: require("../Assets/cheese_burger.jpg"),
            price: "12.00",
            qty : 1,
            id : 0
        },
        {
            name: "Choclate Brownies",
            path: require("../Assets/brownies2.jpg"),
            price: "10.00",
            qty : 1,
            id : 1
        },
        {
            name: "Croissant",
            path: require("../Assets/croissant.jpg"),
            price: "4.00",
            qty : 1,
            id : 2
        },
        {
            name: "Pork Chop",
            path: require("../Assets/pork_chop2.jpg"),
            price: "15.00",
            qty : 1,
            id : 3
        },
        {
            name: "Cheesecake",
            path: require("../Assets/cheese_cake.jpg"),
            price: "9.00",
            qty : 1,
            id : 4
        },
        {
            name: "Salmon Bowl",
            path: require("../Assets/salmon_bowl2.jpg"),
            price: "13.00",
            qty : 1,
            id : 5
        }
    ];

    const { myFun } = useDataProvider();
    return (
        <>
            <div className="highlight py-5">
                <div className="container-fluid row justify-content-center">
                    <div className="col-10">
                        <h4>This weeks specials</h4>
                    </div>
                    <div className="col-10 row justify-content-between p-0">
                        {
                            items.map(item => {
                                return (
                                    <div key={item.name} className="col-lg-4 col-md-6 mt-4 p-0">
                                        <div className="card border border-0">
                                            <div className="card-body rounded-2">
                                                <img className="img-fluid mb-4  shadow" src={item.path} alt="menu_img" />
                                                <h5>{item.name}</h5>
                                                <h5 className='price float-end'><b>${item.price}</b></h5>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                                <hr></hr>
                                                <Button className="main-btn" >
                                                    Order Now
                                                </Button>
                                                <Button className="secondary-btn" onclick={() => myFun("cartadd", item)}>
                                                     Add to cart
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="col-10 pt-4 ">
                        <Link to="/menu" className='d-flex align-items-center'>view menu <i className="fa-solid fa-arrow-right ms-2"></i></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(Highlight);