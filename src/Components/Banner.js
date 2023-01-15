import "../CSS/Banner.css"
import "../App.css"

function Banner() {
    return (
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center align-content-center"
            id="banner">
            <div>
                <h1>Fresh And <span>Organic</span> Products For Your</h1>
                <p>Lorem Ipsum DolorSit Amet Consectetur Adipisicing Elit.Aliquam Libero Nostrum Veniam Facere Tempare Nisi.
                </p>
                <a href="#products">Shop Now</a>
            </div>
        </div>
    );
}

export default Banner;