import "../CSS/Blogs.css"
import BlogImg1 from "../Images/blog-1.jpg"
import BlogImg2 from "../Images/blog-2.jpg"
import BlogImg3 from "../Images/blog-3.jpg"


function Blogs() {
    return (
        <div className="container-fluid bg-light" id="blog">

            <div className="heading">
                Our<div className="arrow-design"><span>Blogs</span></div>
            </div>

            <div className="row g-4 mt-5">
                <BlogsCard BlogImg={BlogImg1} />
                <BlogsCard BlogImg={BlogImg2} />
                <BlogsCard BlogImg={BlogImg3} />
            </div>
        </div>
    )
}

function BlogsCard({BlogImg}) {
    return (
        <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="card">
                <img src={BlogImg} className="card-img-top" alt="img1"/>
                    <div className="card-body">
                        <div className="date">
                            <span><i className="fa-solid fa-user"></i> By User</span>
                            <span><i className="fa-solid fa-calendar"></i> 1st May 2021</span>
                        </div>
                        <h5 className="card-title">Fresh and Organic Vegitabels and Fruits</h5>
                        <p className="card-text">Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Veniam, Expedita.
                        </p>
                        <a href="">Read More</a>
                    </div>
            </div>
        </div>
    );
}

export default Blogs