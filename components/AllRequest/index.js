import React,{useState} from 'react'
import {Avatar, Box, Typography,Button,Drawer} from '@mui/material'





const Index = () => {
    const [state, setState] = useState({
        
        right: false,
      });

      const toggleDrawer = (anchor, open) => (event) => {
        if (
          event &&
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };

     
  return (
    
    <>
    
    <Box mt="20px">
        <Typography variant='h6' fontWeight="600" fontSize="30x">Users</Typography>

      <Box>
         <Box display="flex" justifyContent="space-between" mt="20px" mr="13px" pl="25px" pr="15px">
            <Typography>Name</Typography>
            <Typography>Email</Typography>
            <Typography>Country</Typography>
            <Typography>Phone no.</Typography>
            <Typography>Specilist</Typography>
           
         </Box>
         <Box display="flex"  justifyContent="space-between" alignItems="center" boxShadow="2" mt="10px" mr="13px" height="60px" borderRadius="8px" pl="20px" pr="10px" backgroundColor="white"  >

            <Box display="flex" gap="5px" alignItems="center" > <Avatar sx={{width:"30px",height:"30px"}}></Avatar> <Typography variant='body2'>John Deo</Typography></Box>
            <Typography variant='body2'>Kashif08@gmail.com</Typography>
            <Typography variant='body2'>Pakistan</Typography>
            <Typography variant='body2'>+92 3082345898</Typography>
            <Box height="30px" width="110px" backgroundColor="rgb(239,230,255)" display="flex" alignItems="center" justifyContent="center" borderRadius="50px">
                <Typography variant='body2' color="#800080">Pshychologist</Typography>
            </Box>
        
         </Box>
         <Box display="flex"  justifyContent="space-between" alignItems="center" boxShadow="2" mt="10px" mr="13px" height="60px" borderRadius="8px" pl="20px" pr="10px" backgroundColor="white" >
            <Box display="flex" gap="5px" alignItems="center" > <Avatar sx={{width:"30px",height:"30px"}}></Avatar> <Typography variant='body2'>John Deo</Typography></Box>
            <Typography variant='body2'>Asghar28@gmail.com</Typography>
            <Typography variant='body2'>Australia</Typography>
            <Typography variant='body2'>+321 3082345898</Typography>
            <Box height="30px" width="110px" backgroundColor="rgb(239,230,255)" display="flex" alignItems="center" justifyContent="center" borderRadius="50px">
                <Typography variant='body2' color="#800080">Cardiologistic</Typography>
            </Box>
         </Box>

      </Box>
            
    </Box>
    </>
  )
}

export default Index