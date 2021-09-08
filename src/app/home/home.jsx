import React from 'react'
import Header from '../home/header/header'
import Header2 from '../home/header2/header2.jsx'
import Body from '../home/body/body'
import Foot from '../home/foot/foot'

import Signin from '../sign/sign'
import {BrowserRouter as Router,Route} from 'react-router-dom'

export default function home() {
    return (
        <div>
            <Header/>
            <Header2/>
            <Body/>
            <Foot/> 

            {/* <Datafile/> */}


        </div>
    )
}
