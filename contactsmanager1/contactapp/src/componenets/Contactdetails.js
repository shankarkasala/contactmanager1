import React from 'react'
import {Link} from 'react-router-dom'
function Contactdetails(props) {
    const {name,email}=props.location.state.contact
    return (
        <div className="App3">
        <div>
            <Link to="/">
            <button>back</button>
            </Link>
            <h2>{name}</h2>
            <h1>{email}</h1>
        </div>
        </div>
    )
}

export default Contactdetails
