import Dataf from '../data.js'
import React from 'react'

function Data () {
    const appdata=Dataf.map( inner => inner.id + inner.firstname + inner.lastname)
   //print on console
    console.log(appdata)
       return (
        <div >
              <p>App js page</p>
   
                 {appdata} 
   
         </div>
       )
     }
   export default Data;
   