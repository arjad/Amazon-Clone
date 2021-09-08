import ReactDom from 'react-dom'
import React,{useState} from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'

import Home from '../app/home/home'
import Signin from '../app/sign/sign'
import Signup from '../app/signup/signup'

let App=()=>{
    

    return <div>        
        <Router>
            <Route path="/" exact component={Home}/>

            <Route path="/logo" exact component={Home}/>
            <Route path="/signin" exact component={Signin}/>
            <Route path="/signup" exact component={Signup}/>


        </Router>

    </div>
}
export default App