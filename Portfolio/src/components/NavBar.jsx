import { useNavigate, Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import './Navbar.css';

const NavBar = () => {
    const navigate = useNavigate();

    return (
        <nav
            className="navbar mainContainern navbar-expand-md bg-body-tertiary fixed-top mt-1"
            style={{
                width: "97%",
                paddingTop: "10px",
                paddingBottom: "10px",
                margin: "0 auto",
                left: "0",
                right: "0"
            }}
        >
            <div className="container-fluid px-2">

                {/* Wrapper */}
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-between w-100">

                    {/* Logo */}
                    <img
                        src={Logo}
                        alt="Logo"
                        className="img-fluid mb-2 mb-md-0"
                        onClick={() => navigate("/home")}
                        style={{
                            height: "70px",
                            cursor: "pointer"
                        }}
                    />

                    {/* Nav Links */}
                    <div className="navbar-nav d-flex flex-row flex-wrap justify-content-center w-100 w-md-auto">
                        <Link to="/home" className="nav-link px-2 py-1">Home</Link>
                        <Link to="/about" className="nav-link px-2 py-1">About</Link>
                        <Link to="/projects" className="nav-link px-2 py-1">Projects</Link>
                        <Link to="/contactUs" className="nav-link px-2 py-1">Contact Us</Link>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default NavBar;
