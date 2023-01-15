import "../CSS/Products.css"
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, setProduct } from "./Redux/Actions/ProductActions";
import { useNavigate } from "react-router-dom";


function Products() {

    const history = useNavigate();

    const Products = useSelector((state) => state.products.productData);
    const dispatch = useDispatch();


    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        history('/cart')
    }

    const getProductData = async () => {
        const response = await axios.get('http://localhost:5000/products').catch((err) => console.log("Error Occurred", err));
        dispatch(setProduct(response.data))
    }

    useEffect(() => {
        getProductData();
    }, [])

    return (
        <div className="container-fluid bg-light" id="products">

            <div className="heading">
                Our<div className="arrow-design"><span>Products</span></div>
            </div>

            <div className="row g-4 mt-5">
                {
                    Products && Products.length
                        ?
                        Products.map((item) => (
                            <div className="col-lg-3 col-md-6 col-sm-6" key={item.id}>
                                <div className="card">
                                    <img src={item.Image} className="card-img-top" alt={item.Im} />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.Name}</h5>
                                        <p className="card-text"><i className="fa-solid fa-indian-rupee-sign"></i> {item.Price}/-</p >
                                        <div className="card-rating"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i
                                            className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i
                                                className="fa-solid fa-star-half-stroke"></i></div>
                                        <button className="add-to-cart-btn" onClick={() => handleAddToCart(item)} >Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        )) : "Items Not Found"
                }
            </div>
        </div>
    );
}

export default Products;
