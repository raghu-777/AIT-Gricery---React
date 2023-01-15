import React from 'react'
import './Payment.css'
import PaymentImg from "../../Images/org3.jpg"

export default function Payment() {
  return (
    <div className="container-fluid" id="payment">
      <div className="row">
        <div className="col-lg-6">
          <img src={PaymentImg} alt="payment" />
        </div>
        <div className="col col-lg-6">
          <h1>ALL PAYMENT OPTION</h1>
          <h2>FRESH VEGETABLES AND FRUITS</h2>
          <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem dolorum qui praesentium est, pariatur velit quia ipsum dolor consequuntur aliquid cum, minus veritatis nobis reprehenderit voluptas atque eveniet soluta corrupti!
            Quas nemo incidunt, alias corrupti minima dolores voluptatibus, repellendus ipsam fugit est reiciendis repellat consequatur maiores doloremque ab non ratione explicabo corporis rem culpa esse nisi. Inventore quisquam quibusdam cum.
            Maiores illo amet adipisci consequatur ratione consequuntur quis, dignissimos optio saepe.</span>
          <div className="mt-5 text-center"><a href="abc">Shop Now</a></div>
        </div>
      </div>
    </div>
  )
}
