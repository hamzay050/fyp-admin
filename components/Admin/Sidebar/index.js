import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react'

const index = () => {
  return (
    
    <Box height="100vh" backgroundColor="white" >
      <Box sx={{display:'flex',alignItems:'center'}}>
                <Image
                src='/Assests/mlogo.png'
                width={70}
                height={60}
                style={{margin:'0'}}
                alt='Logo Image'/>
                <Typography sx={{fontWeight:'600'}}>HEALTH EASE</Typography>
             </Box>
             <Box display="flex"  justifyContent="space-evenly" alignItems="center" height="60px"  flexDirection="column">
    <Link href=""  style={{textDecoration:'none'}}>
      <Box display="flex" marginTop="100px">
      <DashboardIcon fontSize='medium' /> 
      <Typography variant='h5' sx={{paddingLeft:"8px"}}>
    
     Dashoard
    </Typography>
    </Box>
    </Link>
    <Link href="" style={{textDecoration:'none' }}>
    <Box display='flex' marginTop="30px">
    <AccountCircleIcon />
    <Typography variant='h5' >
    
     Users
    </Typography>
    </Box>
    </Link>
    </Box>
      </Box>
  )
}

export default index