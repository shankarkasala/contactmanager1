import React,{useState,useEffect} from 'react'
import './App.css';
import Addcontacts from './componenets/Addcontacts';
import Contactlist from './componenets/Contactlist';
import Header from './componenets/Header';
import{uuid} from 'uuidv4'
import { ChakraProvider } from "@chakra-ui/react"
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Contactdetails from './componenets/Contactdetails';
import api from './api/contacts'
import Editcontacts from './componenets/Editcontacts'
function App() {
  const LOCAL_STORAGE_KEY="contacts"
  const [contacts,setContacts] = useState([])
  const retrivecontacts= async()=>{
    const response= await api.get("/contacts")
    return response.data
  }
  const addcontacthandler= async(contact)=>{
    //setContacts([...contacts,contact])
   // setContacts([...contacts,{id:uuid(),...contact}])
    const requst={
      id:uuid(),
      ...contact
      
    }
    const response=await api.post("/contacts",requst)
    setContacts([...contacts,response.data])
  }
  const updatecontacthandler=async(contact)=>{
const response=await api.put(`/contacts/${contact.id}`,contact)
const {id}=response.data
setContacts(contacts.map((contact)=>{
  return contact.id===id?{...response.data}:contact
}))
  }
  const removcontacthandler=async(id)=>{
    await api.delete(`/contacts/${id}`)
    const newcontact=contacts.filter((contact)=>{
      return contact.id!==id
      
    })
    setContacts(newcontact)

  }
  useEffect(() => {
  //   const retrivecontacts=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  //  if(retrivecontacts) setContacts(retrivecontacts)
    const getallcontacts=async()=>{
      const allcontacts=await retrivecontacts()
      if(allcontacts) setContacts(allcontacts)
    }
    getallcontacts()
  }, [])
  useEffect(() => {
   localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
  }, [contacts])
  
  return (
    <div className="App">
     
      <Router>
      <ChakraProvider>  
    <Header/>
    
    <Switch>
    <Route path="/" exact
    render={(props)=>(
  <Contactlist 
    {...props}  
    contacts={contacts} 
    getcontactid={removcontacthandler}/>)}/>
    <Route path="/add" 
    render={(props)=>(
    <Addcontacts 
    {...props} 
    addcontacthandler={addcontacthandler}/>)}/>
    <Route path="/edit" 
    render={(props)=>(
    <Editcontacts 
    {...props} 
    updatecontacthandler={updatecontacthandler}/>)}/>
    <Route path="/contact/:id" component={Contactdetails}/>
    </Switch>
    </ChakraProvider>
    </Router>
    {/* <Contactlist contacts={contacts} getcontactid={removcontacthandler}/> */}
    {/* <Addcontacts addcontacthandler={addcontacthandler}/> */}
    </div>
    
  );
}

export default App;
