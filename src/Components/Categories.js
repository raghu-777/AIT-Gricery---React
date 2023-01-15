import "../CSS/Categories.css"
import CategoriesImg1 from "../Images/cat-1.png"
import CategoriesImg2 from "../Images/cat-2.png"
import CategoriesImg3 from "../Images/cat-3.png"
import CategoriesImg4 from "../Images/cat-4.png"

function Categories() {
    return (
        <div className="container-fluid bg-light" id="categories">

            <div className="heading">
                Product<div className="arrow-design"><span>Categories</span></div>
            </div>

            <div className="row g-4 mt-5">
            <CategoriesCard CategoriesImg={CategoriesImg1} CategoriesTitle="Vegetables"/>
            <CategoriesCard CategoriesImg={CategoriesImg2} CategoriesTitle="Fresh Fruits"/>
            <CategoriesCard CategoriesImg={CategoriesImg3} CategoriesTitle="Dairy Products"/>
            <CategoriesCard CategoriesImg={CategoriesImg4} CategoriesTitle="Fresh Meat"/>

            </div>

        </div>
    );
}

function CategoriesCard({CategoriesImg,CategoriesTitle}) {
    return (
        <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card">
                <img src={CategoriesImg} className="card-img-top" alt="img1" />
                <div className="card-body">
                    <h5 className="card-title">{CategoriesTitle}</h5>
                    <p className="card-text">Upto 45% Off</p>
                    <a href="">Shop Now</a>
                </div>
            </div>
        </div>
    );
}

export default Categories;