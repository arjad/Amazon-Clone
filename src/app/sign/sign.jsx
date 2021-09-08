import React,{useState} from 'react'
import '../sign/sign.css'
import A from '../home/img/a.jpg'
import {Link} from 'react-router-dom'

export default function Sign() 
{
    const[Email,setEmail]= useState("")
    
    let handle_change_email=(e)=>
    {
       setEmail(e.target.value)
    }
    let handle_cont=()=>
    {
        var p=document.getElementsByClassName("Uname");
        if(Email=="")
        {
            alert("You have to provide Email or Phone No");
        }
    }
    return (

<div className="signin">
    <img src={A} className="amazon"/>

    <form className="login" method="get" action="login.php">   
        <h3>Sign-In</h3>
        <label className="email"><b>Email or mobile phone number</b>   </label>    
        <input type="text" name="Uname" className="Uname" onChange={handle_change_email}/>    
        <br/><br/>    
        
        <input type="button" className="log" value="Continue" onClick={handle_cont}/>       
        <br/><br/>    
           
        <span className="line">By continuing, you agree to Amazon's       
            <a className="aa" href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=200545940">
                 Conditions of Use
            </a>
                 and       
            <a className="aa" href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=200534380">Privacy Notice.</a>
        </span>    
        
        <br/><br/>

        <a className="help" href="#">Need Help ?</a>    
    </form>  
    <p className="new_acc">New to Account ?</p>


    <Link className="create_new_acc_btn" to="/signup">
        <input type="button" className="new_acc_btn" value="Create Your Amazon Account"/>   
    </Link>
    
        <br/>
        
    <a className="aa" href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=200545940">
        Conditions of Use
    </a>             
    <a className="aa" href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=200534380">
        Privacy Notice.
    </a>

    <span className="copyright">© 1996-2021, Amazon.com, Inc. or its affiliates</span>
           
       
</div>
    )
}
