import React,{useState} from 'react'
import '../signup/signup.css'
import A from '../home/img/a.jpg'
import {Link} from 'react-router-dom'

export default function Signup() 
{
    const [name, setname] = useState("")
    const [number, setnumber] = useState("")
    const [email, setemail] = useState("")
    const [pass, setpass] = useState("")

    let handle_name=(e)=>
    {
        setname(e.target.value);
    }
    let handle_email=(e)=>
    {
        setemail(e.target.value);
    }
    let handle_number=(e)=>
    {
        setnumber(e.target.value);
    }
    let handle_pass=(e)=>
    {
        setpass(e.target.value);
    }
    const [main_obj,setmain_obj]=useState([])
    
    let handle_submit=(e)=>
    {
        let newarr=main_obj
        let obj={obj_name:name,obj_email:email,obj_number:number,obj_pass:pass}
        newarr.push(obj)
        setmain_obj(newarr)  

        console.log(main_obj)
        alert("QUE SUBMITTED")
    }
    
    const [counter,setcounter]=useState(0)
    console.log(counter);
    let changecount=()=>
    {
        if(counter<main_obj.length-1)
        {    
            setcounter(counter+1)
            console.log(main_obj)
        }    
        else
        {
            console.log(main_obj)

            alert("quiz ends")
        }
    }

    return (
        <div className="signup">
            <img src={A} className="amazon_sign_up"/>
        
            <form className="logup" method="get" action="login.php">   
                <h3>Create Account</h3>
                <label className="email" ><b>Your Name </b>   </label>    
                <input type="text"onChange={handle_name} className="Uname" required/>    
                <br/><br/>    
                <label className="email"  ><b>Mobile Number</b>   </label>    
                <input type="number"onChange={handle_number} className="Uname" required/>    
                <br/><br/>    
                <label className="email" ><b>Email (optional) </b>   </label>    
                <input type="email"onChange={handle_email} className="Uname"/>    
                <br/><br/>    
                <label className="email" ><b>Password</b>   </label>    
                <input type="password"onChange={handle_pass} placeholder="At least 6 characters" className="Uname" required/>    
                <br/>
                <span className="i_pass"><i class="fas fa-info"></i>Passwords must be at least 6 characters.</span>
               
               <br/>
               <br/>

            <p className="extra_para">We will send you a text to verify your phone.
            Message and Data rates may apply.
            </p>       
            

            <button type="submit" className="log" onClick={handle_submit}>Continue</button>       
            <br/><br/>    
                   
            <p className="ss">Already have an Account?  
                <Link to="/signin">
                    Sign In
                </Link>
                <br/>Buying for bussiness? 
                <a href='https://www.amazon.in/business/register/org/landing?ref_=ap_altreg_ab'>Create Business Account</a> </p>
            <br/><br/>
        
            </form>  
            <br/><br/>
            <br/><br/>

            <a className="aa" href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=200545940">
                Conditions of Use
            </a>             
            <a className="aa" href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=200534380">
                Privacy Notice.
            </a>
        
            <span className="copyright">© 1996-2021, Amazon.com, Inc. or its affiliates</span>
            <br/><br/>
            <br/><br/>

            <button onClick={changecount}> Next </button> 

        </div>
        
    )
}