import { AppBar, Avatar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'

const index = () => {
  return (
    <Box height="50px" sx={{ flexGrow: 1 }}>
      <AppBar boxShadow="none"  position="static" sx={{backgroundColor:"#E3E8FC"}} >
        <Toolbar sx={{borderRadius:"0 0 0 0", display:"flex", justifyContent:"space-between"  }} >
        <Typography variant='h5' color="black" marginTop="10px">
            Dashboard
        </Typography>
        <Box display="flex"  alignItems="center">
          <Typography variant='h5' color="black" marginRight="10px">
           <span style={{color:"#EDC70B", fontWeight:"600"}}>Admin</span> <br/> Kashif 
          </Typography>
        <Avatar>K</Avatar>
        </Box>
        </Toolbar>
      </AppBar>
       
     </Box>

    
  )
}

export default index