import { Link } from "react-router-dom"
import "../CSS/Features.css"
import FeatureImg1 from "../Images/feature-img-1.png"
import FeatureImg2 from "../Images/feature-img-2.png"
import FeatureImg3 from "../Images/feature-img-3.png"


function Features() {

    return (
        <div className="container-fluid bg-light" id="features">

            <div className="heading">
                Our<div className="arrow-design"><span>Features</span></div>
            </div>

            <div className="row g-4 mt-5">
                <FeaturesCard FeaturesImg={FeatureImg1} link="/Grocery" FeatureTitle="Fresh and Organic" />
                <FeaturesCard FeaturesImg={FeatureImg2} link="/Delivery" FeatureTitle="Free Delivery" />
                <FeaturesCard FeaturesImg={FeatureImg3} link="/Payment" FeatureTitle="Easy Payments" />
            </div>
        </div>
    )
}

function FeaturesCard({ FeaturesImg, FeatureTitle,link }) {

    return (
        <>
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="card">
                    <img src={FeaturesImg} className="card-img-top" alt="img1" />
                    <div className="card-body">
                        <h5 className="card-title">{FeatureTitle}</h5>
                        <p className="card-text">Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Deserunt, Earum!
                        </p>
                        <Link to={link}>Read More</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Features;