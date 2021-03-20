import React from 'react'
import { Box } from "@chakra-ui/react"
function Header() {
    return (
        <div>
            <Box bg="tomato" w="100%" p={4} color="white">
               <h1 style={{fontSize:"40px"}} >CONTACT MANAGER</h1>
            </Box>
            <br/>
            {/* <h1 style={{color:"orange"}}>CONTACT MANAGER</h1> */}
        </div>
    )
}

export default Header

