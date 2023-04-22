import icon from '../Assets/logo_footer.png'

export default function Footer() {
    return (
        <footer>
            <div id="img">
                <img src={icon} alt="logo" />
            </div>
            <div>
                <h4>Doormat Navigation</h4>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Reservation</a></li>
                    <li><a href="#">Order Online</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </div>
            <div>
                <h4> Contact</h4>
                <ul>
                    <li><a href="#">Phone</a></li>
                    <li><a href="#">Email</a></li>
                    <li><a href="#">Address</a></li>
                </ul>
            </div><div>
                <h4>Social Media Links</h4>
                <ul>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">LinkedIn</a></li>
                    <li><a href="#">Facebook</a></li>
                </ul>
            </div>
        </footer>
    );
}