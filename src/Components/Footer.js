import "../CSS/Footer.css"
import FooterImg from "../Images/payment.png"

function Footer() {
    return (
        <div className="container-fluid" id='footer'>
            <div className="row">
                <div className="footer-body col-lg-3 col-md-6">
                    <div className="logo mb-4 mt-5">
                        Achievers<span>IT</span><i className="fa-solid fa-basket-shopping"></i>
                    </div>
                    <span style={{ width: '80%', marginBottom: '20px' }}>Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit.
                        Aliquam, Saepe.</span>
                    <div className="social-media">
                        <ul className="d-flex">
                            <li><i className="fa-brands fa-facebook-f"></i></li>
                            <li><i className="fa-brands fa-twitter"></i></li>
                            <li><i className="fa-brands fa-instagram"></i></li>
                            <li><i className="fa-brands fa-linkedin-in"></i></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-body col-lg-3 col-md-6">
                    <h2>Contact Info</h2>
                    <ul>
                        <div className="d-flex align-items-center"><i className="fa-solid fa-phone-flip"></i>
                            <li className="move-text"><span>+123-456-7890</span></li>
                        </div>
                        <div className="d-flex align-items-center"><i className="fa-solid fa-phone-flip"></i>
                            <li className="move-text"><span>+111-222-3333</span></li>
                        </div>
                        <div className="d-flex align-items-center"><i style={{marginRight: '15px'}}
                            className="fa-solid fa-envelope"></i>
                            <li className="move-text"><span>Shaikhanas@gmail.com</span></li>
                        </div>
                        <div className="d-flex align-items-center"><i style={{marginRight: '20px'}}
                            className="fa-solid fa-location-dot"></i>
                            <li className="move-text"><span>Mumbai, India - 400104</span></li>
                        </div>
                    </ul>
                </div>
                <div className="footer-body col-lg-3 col-md-6">
                    <h2>Quick Links</h2>
                    <ul>
                        <div className="d-flex align-items-center"><i className="fa-solid fa-arrow-right"></i>
                            <li className="move-text"><a href="index.html">Home</a></li>
                        </div>
                        <div className="d-flex align-items-center"><i className="fa-solid fa-arrow-right"></i>
                            <li className="move-text"><a href="#">Features</a></li>
                        </div>
                        <div className="d-flex align-items-center"><i className="fa-solid fa-arrow-right"></i>
                            <li className="move-text"><a href="#">Products</a></li>
                        </div>
                        <div className="d-flex align-items-center"><i className="fa-solid fa-arrow-right"></i>
                            <li className="move-text"><a href="#">Categories</a></li>
                        </div>
                        <div className="d-flex align-items-center"><i className="fa-solid fa-arrow-right"></i>
                            <li className="move-text"><a href="#">Review</a></li>
                        </div>
                        <div className="d-flex align-items-center"><i className="fa-solid fa-arrow-right"></i>
                            <li className="move-text"><a href="#">Blogs</a></li>
                        </div>
                    </ul>
                </div>
                <div className="footer-body col-lg-3 col-md-6">
                    <h2>Newsletter</h2>
                    <span style={{ marginBottom: '20px' }}>Subscribe For Latest Updates</span>
                    <input style={{ marginBottom: '10px' }} type="email" name="mail" id="mail" placeholder="Your Mail" />
                    <button style={{ marginBottom: '20px' }} type="submit">Submit</button>
                    <img src={FooterImg} alt="Payment" />
                </div>
            </div>
            <h3>Create By <span>Mr. RAGHU B.S</span> | All Rights Reserved</h3>
        </div>
    );
}

export default Footer