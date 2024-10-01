import './nav.css'
import Button from '../Button';
import { NavLink, useNavigate } from "react-router-dom";

const Nav = () => {
    const navigate = useNavigate();


    return (
        <>
            <div className="top-head">
                <p>Happy Employees, Effortless HR: Experience the introdo Advantage. <b> Try it for Free!</b></p>
            </div>

            <div className="menubar">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light ">
                        <div className="container-fluid p-0">
                            <a className="navbar-brand" href="#">
                                <NavLink to="/" className="nav-link">
                                    <div className="logo">
                                        <img src="logo.png" alt="logo"></img>
                                    </div>
                                </NavLink>
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav  mb-2 mb-lg-0">

                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Products
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><NavLink to="/product1" className="dropdown-item">Product 1</NavLink></li>
                                            <li><NavLink to="/product2" className="dropdown-item">Product 2</NavLink></li>
                                            <li><NavLink to="/product3" className="dropdown-item">Product 3</NavLink></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Solution
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><NavLink to="/product1" className="dropdown-item">Solution 1</NavLink></li>
                                            <li><NavLink to="/product2" className="dropdown-item">Solution 2</NavLink></li>
                                            <li><NavLink to="/product3" className="dropdown-item">Solution 3</NavLink></li>
                                        </ul>
                                    </li>
                                    <NavLink to="/Pricing" className="nav-link">
                                        Pricing
                                    </NavLink>
                                    <li className="nav-item">
                                        <NavLink to="/PartnerProgram " className="nav-link">
                                            Partner Program
                                        </NavLink>
                                    </li>


                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><NavLink to="/product1" className="dropdown-item">Solution 1</NavLink></li>
                                        <li><NavLink to="/product2" className="dropdown-item">Solution 2</NavLink></li>
                                        <li><NavLink to="/product3" className="dropdown-item">Solution 3</NavLink></li>
                                    </ul>

                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Resources
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><NavLink to="/product1" className="dropdown-item">Resources 1</NavLink></li>
                                            <li><NavLink to="/product2" className="dropdown-item">Resources 2</NavLink></li>
                                        </ul>
                                    </li>



                                </ul>
                                <div className="btn-div">
                                    <Button name="EN" className="mainbtn" />

                                    <Button name="Login" className="mainbtn"> <img src='login.png'></img> </Button>
                                </div>
                            </div>
                        </div>
                    </nav>

                </div>
            </div>
        </>
    );
}

export default Nav;
