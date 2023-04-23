import { Routes, Route, Link } from 'react-router-dom'
import HomePage from './HomePage';
import About from './About';
import Menu from './Menu';
import Reservation from './Reservation';
import Orderonline from './Orderonline';
import Login from './Login';
import icon from '../Assets/yellow_monochrome.png'
export default function Nav() {
    return (
        <>
            <nav className='navbar navbar-expand-lg navbar-light bg-white border border-1'>
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
                            <li className='nav-item'><Link className='nav-link' to="/logIn">Login</Link></li>
                        </ul>
                    </div>
                    <ul className='nav ms-auto align-items-center gap-2'>
                        <li className='nav-item'><Link className='nav-link active' to="/"><img id="user_img" className='rounded-circle' src={require('../Assets/user.png')} alt="user image"/></Link></li>
                        <li className='nav-item'><i id="cart" class=" fa-solid fa-cart-shopping"></i></li>
                    </ul>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/reservation" element={<Reservation />} />
                <Route path="/orderOnline" element={<Orderonline />} />
                <Route path="/logIn" element={<Login />} />
            </Routes>
        </>
    );
}