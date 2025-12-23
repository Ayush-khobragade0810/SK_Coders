import { useNavigate, Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import './Navbar.css';

const NavBar = () => {

    const navigate = useNavigate();
    return (
        <nav className="navbar mainContainern navbar-expand-sm bg-body-tertiary w-80 fixed-top mt-1 container-fluid justify-content-center" style={{width: "97%", paddingTop: "10px", paddingBottom: "10px", margin: "0 auto", left: "0", right: "0"}}>
            <div className="container-fluid">

                 <img src={Logo} alt="Logo" className="img-fluid" onClick={() => navigate("/home")} style={{ height: "100px", cursor: 'pointer' }} />

                <div className="navbar-nav">
                    <Link to="/home" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/projects" className="nav-link">Projects</Link>
                    <Link to="/contactUs" className="nav-link">Contact Us</Link>
                </div>

            </div>
        </nav>

    )
}
export default NavBar;