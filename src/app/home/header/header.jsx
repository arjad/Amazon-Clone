import React,{useState} from 'react'
import ReactDom from 'react-dom'
import '../header/header.css' 
import Logo from '../img/logo.jpg'
import Flag from '../img/flag.png'
import {Link} from 'react-router-dom'
import Model from 'react-modal';
import {Component, Suspense} from 'react';
import {useTranslation, withTranslation} from "react-i18next";
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Data from '../MOCK_DATA.json'


let Header=()=>{
    const[modelisopen,setmodelisopen] = useState(false);
    const[modelisopen2,setmodelisopen2] = useState(false);

    const [searched, setsearched] = useState('')
    //hook
    const [t, i18n] = useTranslation('common');

    return <div className="header">

    <Model className="m" style={{height: 300, width: 300}} isOpen={modelisopen}>
        <h5>Choose Your Location</h5>
        <hr/>
        <p> Select a delivery location to see product availability and<br/>
            delivery options
        </p>


        <Link to="/signin">
        <button className="signin_btn"> Sign In to see your address</button>
        </Link>
        <h6>or enter an Indian pincode</h6>
        <button className="closed" onClick={()=>{setmodelisopen(false)}}><span class="close">&times;</span></button>
        <input placeholder="Coupon Code"/>
        <button className="apply">Apply Now</button>


    </Model>

{/* ///////////////////////////////////////// */}
    <div className="tittlebar">
            <Link to='/logo'>
            <img className="logo" src={Logo} alt="logo here" />
            </Link>

        <button className="hello" onClick={()=>{setmodelisopen(true)}}>
            <Suspense fallback="loading">
            <div>
                <p>
                   {t('Hello', {framework:'React'})}
                </p>
                <h5>
                    {
                      t('Select Your Address')
                    }
                </h5>
            </div>
            </Suspense>


        </button>

        <div className="textbox">
                <select name="catagory" className="select">

                <option className="P" value="  All">  All</option>
                <option value="Deals">Deals</option>
                <option value="Fashion">Fashion</option>
                <option value="Apps">Apps and Games</option>
                <option value="Deals">Deals</option>
                <option value="Comp">Computer and Accessories</option>
                <option value="Apps">Apps and Games</option>
                <option value="Deals">Deals</option>
                <option value="Fashion">Fashion</option>
                <option value="Apps">Apps and Games</option>
                <option value="Deals">Deals</option>
                <option value="Fashion">Fashion</option>
                <option value="Apps">Apps and Games</option>
                <option value="Cloth">Colthing and Accessories</option>
                <option value="Fashion">Fashion</option>
                <option value="Apps">Apps and Games</option>
                <option value="Apps">Apps and Games</option>
                <option value="Deals">Deals</option>
                <option value="Furniture">Furniture</option>
                <option value="kitchen">Kitchen</option> 
                </select>
                
                <input onChange={(e)=>{setsearched(e.target.value)}} className="inp" type="text" placeholder="type things to search..."/>
                {/* ///Json data here// */}
                {Data.filter((val)=>{
                    if(searched=="")
                    {
                        // return val;
                    }
                    else if(val.product_name.toLowerCase().includes(searched.toLowerCase()))
                    {
                        return val;
                    }
                }).map((val,key)=>{
                    return (
                        <ul className="searched_items" key={key}>
                            <li className="pro_name">
                                {val.product_name}
                                </li>
                        </ul>
                    )
                })}
                <button className="search"><i class="fas fa-search"></i></button>
        </div>

{/* /////////////////language change */}
        <button className="flagd"  onClick={()=>{setmodelisopen2(true)}}>
            <img className="flag" src={Flag} alt="img" />
            <span><i class="fas fa-sort-down"></i></span>
            
        </button>
{/* //////////model 2// */}

    <Model className="m2" isOpen={modelisopen2}>
        <ul>
            <li><button onClick={() => i18n.changeLanguage('en')}>Urdu</button></li>
            <li><button onClick={() => i18n.changeLanguage('dn')}>English</button></li>
        </ul>
        <button className="closed2" onClick={()=>{setmodelisopen2(false)}}><span class="close2">&times;</span></button>

    </Model>

{/* ///////////// */}
        <div className="hello2">
            <p>{t("Hello, Sign In")}</p>
            <h5 className="acc">{t("Account and List")} <i class="fas fa-sort-down"></i> </h5>
        </div>


        <div className="hello3">
            <p>{t("Returns")}</p>
            <h6 className="order">{t("& Orders")} </h6>
        </div>

        <div className="cart">
            <i class="fas fa-shopping-cart"></i>
            <h6 class="carth5">{t("Cart")}</h6>
        </div>


        </div>




    </div>
}
export default Header