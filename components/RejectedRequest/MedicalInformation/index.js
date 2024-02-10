import { Box,Typography,Button } from '@mui/material'
import React from 'react'
import ClearIcon from '@mui/icons-material/CheckCircle';


export default function MedicalInformation() {
  return (
    <Box m='2rem 1rem'>
      <Box m='1rem 0'>
         <Typography variant='h6' sx={{display:'inline',color:'#333434fa',fontSize:'1.1rem'}}>Education:</Typography>
         <Typography variant='body1' sx={{display:'inline'}}> MBBS of Hearts</Typography>
         </Box>
         <Box m='1rem 0'>
         <Typography variant='h6' sx={{display:'inline',color:'#333434fa',fontSize:'1.1rem'}}>Experience:</Typography>
         <Typography variant='body1' sx={{display:'inline'}}> 12 Years</Typography>
         </Box>
         <Box m='1rem 0'>
         <Typography variant='h6' sx={{display:'inline',color:'#333434fa',fontSize:'1.1rem'}}>Speciality:</Typography>
         <Typography variant='body1' sx={{display:'inline'}}> Heart Disease</Typography>
         </Box>
         <Box>
         <Typography variant='h6' sx={{display:'inline',color:'#333434fa',fontSize:'1.1rem'}}>Sex:</Typography>
         <Typography variant='body1' sx={{display:'inline',marginRight:'3rem'}}> Male</Typography>
         {/* DOB */}
         <Typography variant='h6' sx={{display:'inline',color:'#333434fa',fontSize:'1.1rem'}}>Date of birth:</Typography>
         <Typography variant='body1' sx={{display:'inline'}}> 20-10-2000</Typography>
         </Box>
         <Box m='1rem 0'>
         <Typography variant='h6' sx={{display:'inline',color:'#333434fa',fontSize:'1.1rem'}}>License:</Typography>
         <Typography variant='body1' sx={{display:'inline'}}> File.pdf</Typography>
         </Box>
         <Box sx={{display:'flex',justifyContent:'end',margin:'2rem 0'}}>
            {/* <Button variant='contained' color='primary'>Approve</Button> */}
            {/* <Button variant='contained' color='secondary' sx={{color:'white',margin:'0 0.5rem'}}>Reject</Button> */}
            <ClearIcon fontSize='small' color='secondary'/>
            <Typography variant='caption' color='secondary'>Rejected</Typography>
         </Box>
    </Box>
  )
}
