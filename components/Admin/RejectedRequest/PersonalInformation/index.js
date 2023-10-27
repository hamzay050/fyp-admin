import { Box,Typography,Avatar,Button } from '@mui/material'
import React from 'react'
import ClearIcon from '@mui/icons-material/CheckCircle';


export default function PersonalInformation() {
  return (
    <>
    <Box m='0 1rem'> 
        <Box sx={{display:'flex',justifyContent:'center',margin:'1rem 0 1.5rem 0'}}>
    <Avatar alt="Remy Sharp" sx={{width:'100px',height:'100px'}} src="/static/images/avatar/1.jpg" />
        </Box>
         <Box>
         <Typography variant='h6' sx={{display:'inline',color:'#333434fa',fontSize:'1.1rem'}}>First Name:</Typography>
         <Typography variant='body1' sx={{display:'inline',marginRight:'4rem'}}> John</Typography>
         {/* LAst NAme */}
         <Typography variant='h6' sx={{display:'inline',color:'#333434fa',fontSize:'1.1rem'}}>Last Name:</Typography>
         <Typography variant='body1' sx={{display:'inline'}}> Doe</Typography>
         </Box>
         <Box m='1rem 0'>
         <Typography variant='h6' sx={{display:'inline',color:'#333434fa',fontSize:'1.1rem'}}>Email:</Typography>
         <Typography variant='body1' sx={{display:'inline'}}> www.google.com</Typography>
         </Box>
         <Box m='1rem 0'>
         <Typography variant='h6' sx={{display:'inline',color:'#333434fa',fontSize:'1.1rem'}}>Contact No:</Typography>
         <Typography variant='body1' sx={{display:'inline'}}> 0900780001</Typography>
         </Box>
         <Box sx={{display:'flex',justifyContent:'end',margin:'2rem 0'}}>
            {/* <Button variant='contained' color='primary'>Approve</Button> */}
            {/* <Button variant='contained' color='secondary' sx={{color:'white',margin:'0 0.5rem'}}>Reject</Button> */}
            <ClearIcon fontSize='small' color='secondary'/>
            <Typography variant='caption' color='secondary'>Rejected</Typography>
         </Box>
    </Box>
    </>
  )
}
