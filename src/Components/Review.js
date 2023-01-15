import "../CSS/Review.css"
import ReviewImg1 from "../Images/pic-4.png"
import ReviewImg2 from "../Images/pic-1.png"
import ReviewImg3 from "../Images/pic-2.png"
import ReviewImg4 from "../Images/pic-3.png"

function Review() {
    return(
        <div className="container-fluid bg-light" id="reviews">

        <div className="heading">
            Customer's<div className="arrow-design"><span>Review</span></div>
        </div>

        <div className="row g-4 mt-5">
        <ReviewCard ReviewImg={ReviewImg1} />
        <ReviewCard ReviewImg={ReviewImg2} />
        <ReviewCard ReviewImg={ReviewImg3} />
        <ReviewCard ReviewImg={ReviewImg4} />
        </div>

    </div>
    );
}

function ReviewCard({ReviewImg}) {
    return(
        <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="card">
            <img src={ReviewImg} className="card-img-top" alt="img1"/>
            <div className="card-body">
                <p className="card-text">Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Unde Sunt Fugiat
                    Dolore Ipsum Id Est Maxime Ad Tempare Quasi Tentur.
                </p>
                <h5 className="card-title">John Deo</h5>
                <div className="card-rating"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i
                        className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i
                        className="fa-solid fa-star-half-stroke"></i></div>
            </div>
        </div>
    </div>
    );
}

export default Review;