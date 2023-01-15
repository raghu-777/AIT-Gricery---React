import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Cart.css"
import EmptyImg from '../../Images/emptycart.webp'
import { decrementQuantity, removeFromCart, incrementQuantity } from "../Redux/Actions/ProductActions";

function Cart() {
    const CartItems = useSelector(state => state.products.cartItems);
    const dispatch = useDispatch();

    const TotalAmount = CartItems.reduce((acc, ele) => {
        return acc + ele.Price * ele.quantity;
    }, 0);

    let Discount;
    let Subtotal;

    if (TotalAmount >= 500) {
        Discount = 'FREE';
        Subtotal = TotalAmount;
    } else {
        Discount = 40;
        Subtotal = TotalAmount + 40;
    }

    return (
        <div className="container-fluid cart">
            {
                CartItems.length === 0 ? (
                    <div className="container cart-empty">
                        <div>
                            <img src={EmptyImg} alt="empty" />
                        </div>
                        <h1 className="my-5">Your Shopping Cart is Empty</h1>
                        <Link to='/home'>Continue Shopping</Link>
                    </div>
                ) : (
                    <div className="row pt-5">
                        <div className="col-md-7 cart-scroll">
                            {
                                CartItems.map(Item => (
                                    <div className="row cart-item justify-content-center align-items-center text-center" key={Item.id}>
                                        <div className="col-md-4">
                                            <img src={Item.Image} alt={Item.Image} />
                                            <div className="quantity-btn d-flex justify-content-center">
                                                <button onClick={() => dispatch(decrementQuantity(Item))}>-</button>
                                                <p>{Item.quantity}</p>
                                                <button onClick={() => dispatch(incrementQuantity(Item))}>+</button>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <h3>{Item.Name}</h3>
                                        </div>
                                        <div className="col-md-4 d-flex align-items-center justify-content-between remove">
                                            <h2><i className="fa-solid fa-indian-rupee-sign"></i> {Item.Price}</h2>
                                            <div>
                                                <i onClick={() => dispatch(removeFromCart(Item.id))} title="Remove" className="fa-solid fa-trash-can"></i>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        <div className="col-md-5">
                            <div className="row mb-5">
                                <div className="col-md-12">
                                    <Link className="checkout">CheckOut</Link>
                                </div>
                            </div>
                            <div className="row payment">
                                <div className="col-md-6 col-6 text-start">
                                    <h6>PRICE DETAILS</h6>
                                    <p>Price <span>({CartItems.length} Items)</span></p>
                                    <p>Delivery Charges</p>
                                    <h6>AMOUNT PAYABLE</h6>
                                </div>
                                <div className="col-md-6 col-6 text-end charges">
                                    <p><i className="fa-solid fa-indian-rupee-sign"></i>{TotalAmount}</p>
                                    <p className="text-primary">{Discount}</p>
                                    <p className="text-warning"><i className="fa-solid fa-indian-rupee-sign"></i>{Subtotal}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Cart;

