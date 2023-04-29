import { Routes, Route, Link } from 'react-router-dom'
import { useRef, useEffect, useState } from 'react';
import HomePage from './HomePage';
import About from './About';
import Menu from './Menu';
import Reservation from './Reservation';
import Orderonline from './Orderonline';
import Login from './Login';
import Log from './Log';
import Signup from './Signup'
import icon from '../Assets/yellow_monochrome.png'
import { memo } from 'react';
import { useDataProvider } from './DataProvide';
function Nav() {
    const navBar = useRef();
    useEffect(() => {
        const Scroll = () => {
            window.scrollY > 20 ?
                navBar.current.classList.add("shadow") :
                navBar.current.classList.remove("shadow");
        }
        window.addEventListener('scroll', Scroll)

        return () => window.removeEventListener('scroll', Scroll);
    }, [])

    const { totalItem, isLoggedIn } = useDataProvider();
    const [show, setShow] = useState(false);

    return (
        <>
            <nav ref={navBar} className='navbar navbar-expand-lg navbar-light bg-white border border-1 sticky-top'>
                <div className='container'>
                    <img className='navbar-brand img-fluid d-lg-inline d-none' id="brand" src={icon} alt="logo" />
                    <button id="navbar_toggler" className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#myNav">
                        <span className='navbar-toggler-icon' ></span>
                    </button>
                    <div className='navbar-collapse collapse text-center' id="myNav">
                        <ul className='navbar-nav ms-3'>
                            <li className='nav-item'><Link className='nav-link active' to="/">Home</Link></li>
                            <li className='nav-item'><Link className='nav-link' to="/about">About</Link></li>
                            <li className='nav-item'><Link className='nav-link' to="/menu">Menu</Link></li>
                            <li className='nav-item'><Link className='nav-link' to="/reservation">Reservation</Link></li>
                            <li className='nav-item'><Link className='nav-link' to="/orderOnline">Order Online</Link></li>
                            <li className='nav-item'><Link className='nav-link' to="/account">My Account</Link></li>
                        </ul>
                    </div>
                    <ul className='nav ms-auto align-items-center gap-2 me-3'>
                        <li className='nav-item me-3' id='login-popup-parent'>
                            <img onClick={() => setShow(val => !val)} id="user_img" className='rounded-circle' src={require('../Assets/user.png')} alt="user image" />
                            {show && <div id="login-popup" className='d-flex flex-column pb-2'>
                                <div className='px-3 py-2 shadow-sm d-flex justify-content-between' id='login-popup-header'>
                                    <p className='fw-bold mb-0' >User Accounts</p>
                                    <p className="fw-bold mb-0" id="cancel-popup" onClick={() => setShow(val => !val)}>x</p>
                                </div>
                                {
                                    isLoggedIn ? (<p>Hello</p>) :
                                        (<>
                                            <div className='d-flex px-2 pt-1 align-items-center'>
                                                <p className='mb-0 fw-lighter'>You're not logged in</p>
                                                <Link to="/login" className="ms-5" onClick={() => setShow(val => !val)}>login</Link>
                                            </div>
                                            <div className='d-flex px-2 justify-content-between align-items-center'>
                                                <p className='fw-bold mb-0'>New User ?</p>
                                                <Link to="/signup" className="ms-5" onClick={() => setShow(val => !val)}>Signup</Link>
                                            </div>
                                        </>
                                        )
                                }
                            </div>}
                        </li>
                        <li id="cart_parent" className='nav-item pt-2'>
                            <i id="cart" className=" fa-solid fa-cart-shopping" data-bs-toggle="offcanvas" data-bs-target="#basket"></i>
                            {
                                totalItem > 0 ? <p id="cart-counter">{totalItem}</p> : null
                            }
                        </li>
                    </ul>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/reservation" element={<Reservation />} />
                <Route path="/orderOnline" element={<Orderonline />} />
                <Route path="/account" element={<Login />} />
                <Route path='/login' element={<Log/>}/>
                <Route path='/signup' element={<Signup/>}/>
            </Routes>
        </>
    );
}

export default memo(Nav);