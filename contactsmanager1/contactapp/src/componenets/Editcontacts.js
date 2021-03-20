import React, { Component } from 'react'

 class Editcontacts extends Component {
     constructor(props) {
         super(props)
     const {id,name,email}=props.location.state.contact
         this.state = {
            id,
            name,
            email  
         }
     }
    
     update=(e)=>{
         e.preventDefault()
         if(this.state.name===""||this.state.email==="")
         {
             alert("all fields r empty")
             return
         }
         this.props.updatecontacthandler(this.state)
         
         this.setState({name:"",email:""})
         this.props.history.push("/")
     }
    render() {
        return (
            <div className="App2">
            <div>
               <h1 style={{color:"black",fontSize:"30px"}} >Edit Contact</h1>
               <br/>
               <form onSubmit={this.update}>
                   <label style={{color:"black"}}>Name : </label>
                   <input 
                   type="text" 
                   name="name"
                   placeholder="Enter Name"
                   value={this.state.name}
                   onChange={(e)=>this.setState({name:e.target.value})}
                   />
                   <br/>
                   <br/>
                   <label style={{color:"black"}}>Email : </label>
                   <input 
                   type="text" 
                   name="email" 
                   placeholder="Enter Email"
                   value={this.state.email}
                   onChange={(e)=>this.setState({email:e.target.value})}
                    />
                   <br/>
                   <br/>
                   <button>update</button>
                   
            </form> 
            </div>
            </div>
        )
    }
}

export default Editcontacts

