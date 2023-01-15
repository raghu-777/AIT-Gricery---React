import { Link } from "react-router-dom";
import "../CSS/Header.css"
import "./CartItems/Cart.css"
import { Collapse, Offcanvas } from 'bootstrap';
import { useSelector } from "react-redux";



function Header() {

    const Items = useSelector(state => state.products.cartItems.length)

    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link to='/Home' className="navbar-brand">
                        <div className="logo">
                            <i className="fa-solid fa-basket-shopping"></i>Achievers<span>IT</span>
                        </div>
                    </Link>

                    <span className="navbar-logo">
                        <button><i className="fa-solid fa-magnifying-glass"></i></button>
                        <Link to='/cart'>
                            <button type="button" className="cart-open-btn position-relative">
                                <i className="fa-solid fa-cart-shopping"></i>
                                {
                                    Items ? (
                                        <span className="position-absolute translate-middle badge bg-danger" id="result">
                                            {Items}
                                        </span>
                                    ) : null
                                }
                            </button>
                        </Link>
                        <button id="show-login"><i className="fa-solid fa-user"></i></button>
                    </span>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span><i className="fa-solid fa-bars"></i></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/Home' className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link">Features</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link">Categories</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link">Review</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link">Blogs</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;

