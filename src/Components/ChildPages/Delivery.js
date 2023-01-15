import React from 'react'
import PaymentImg from "../../Images/org2.png"
import './Delivery.css'

function Delivery() {
    return (
        <div>
            <div className="container-fluid" id="delivery">
                <div className="row">
                    <div className="col-lg-6">
                        <img src={PaymentImg} alt="delivery" />
                    </div>
                    <div className="col col-lg-6">
                        <h1>FREE DELIVERY</h1>
                        <h2>OVERALL INDIA</h2>
                        <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem dolorum qui praesentium est, pariatur velit quia ipsum dolor consequuntur aliquid cum, minus veritatis nobis reprehenderit voluptas atque eveniet soluta corrupti!
                            Quas nemo incidunt, alias corrupti minima dolores voluptatibus, repellendus ipsam fugit est reiciendis repellat consequatur maiores doloremque ab non ratione explicabo corporis rem culpa esse nisi. Inventore quisquam quibusdam cum.
                            Maiores illo amet adipisci consequatur ratione consequuntur quis, dignissimos optio saepe.</span>
                        <div className="mt-5 text-center"><a href="abc">Shop Now</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Delivery