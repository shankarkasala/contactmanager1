import React from 'react'
import {Link} from 'react-router-dom'
function Contactcard(props) {
    const {id,name,email}=props.contact
    return (
        <div>
            <br/>
              <Link to={{pathname:`/contact/${id}`,state:{contact:props.contact}}}>
            <div>{name}</div>
            <div>{email}</div>
            </Link>
            <br/>
            <Link to={{pathname:`/edit`,state:{contact:props.contact}}}>
            
            <button >update</button>
            </Link>
            <button onClick={()=>props.clickhandler(id) }>Delete</button>
            
        </div>
    )
}

export default Contactcard
