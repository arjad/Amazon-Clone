import React from 'react'
import ReactDom from 'react-dom'
import '../header2/header2.css'
import Add from '../img/add.PNG'

let Header2=()=>{
    return <div className="header2">
        <ul className="ul">
            <li><i class="fas fa-bars"></i>All</li>
            <li>Best Sellers</li>
            <li>Mobile</li>
            <li>Fashion</li>
            <li>Electronics</li>
            <li>Prime ^</li>

            <li>Fashion</li>
            <li>Electronics</li>
            <li>Amazon Pay</li>
        </ul>

        <img className="add" src={Add}/>



    </div>
}
export default Header2