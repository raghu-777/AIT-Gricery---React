import React from 'react'
import { Route, Routes } from "react-router-dom";
import Payment from './ChildPages/Payment';
import Body from './Body';
import Grocery from './ChildPages/Grocery';
import Delivery from './ChildPages/Delivery';
import Cart from './CartItems/Cart';


export default function Navigation() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Body />} />
                <Route path='/Home' element={<Body />} />
                <Route path='/Payment' element={<Payment />} />
                <Route path='/Grocery' element={<Grocery />} />
                <Route path='/Delivery' element={<Delivery />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </>
    )
}
