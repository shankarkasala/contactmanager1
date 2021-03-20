import React from 'react'
import Contactcard from './Contactcard'
import {Link} from 'react-router-dom'
function Contactlist(props) {
    const deletecontact=(id)=>{
        props.getcontactid(id)
    }
    const rendercontactlist=props.contacts.map((contact) => {
        return <Contactcard contact={contact} clickhandler={deletecontact}key={contact.id}/>
        
    })
    return (
        <div className="App3">
        <div>
            <Link to="/add">
            <button>Addcontacts</button>
            </Link>
            <h1 style={{color:"black",fontSize:"30px"}} >Contact List</h1>
            {rendercontactlist}
        </div>
        </div>
    )
}

export default Contactlist
