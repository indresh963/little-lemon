import icon from '../Assets/logo_footer.png'
export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg bg-ligth navbar-light">
            <div className="container-fluid px-5">
                <img className="navbar-brand" src={icon} alt="brand" />
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#sandwich">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse text-center" id="sandwich">
                    <ul className="navbar-nav ms-auto text-muted fw-bold  d-flex gap-lg-3">
                        <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Menu</a></li>
                    </ul>
                </div>

            </div>
        </nav>
    );
}