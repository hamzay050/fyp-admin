import {Box,Typography,Button}from '@mui/material'
import ClearIcon from '@mui/icons-material/CheckCircle';


export default function AddressInformation() {
  return (
    <Box m='2rem 1rem'>
      <Box m='1rem 0'>
         <Typography variant='h6' sx={{display:'inline',color:'#333434fa',fontSize:'1.1rem'}}>Clinic Name:</Typography>
         <Typography variant='body1' sx={{display:'inline'}}> Al Shifa Clinic</Typography>
       </Box>
       <Box m='1rem 0'>
         <Typography variant='h6' sx={{display:'inline',color:'#333434fa',fontSize:'1.1rem'}}>Address Line:</Typography>
         <Typography variant='body1' sx={{display:'inline'}}> Phase 4 DHA</Typography>
       </Box>
       <Box m='1rem 0'>
         <Typography variant='h6' sx={{display:'inline',color:'#333434fa',fontSize:'1.1rem'}}>Street No:</Typography>
         <Typography variant='body1' sx={{display:'inline'}}> Street No 4</Typography>
       </Box>
       <Box m='1rem 0'>
         <Typography variant='h6' sx={{display:'inline',color:'#333434fa',fontSize:'1.1rem'}}>Zip Code:</Typography>
         <Typography variant='body1' sx={{display:'inline'}}> 4444444</Typography>
       </Box>
       <Box>
         <Typography variant='h6' sx={{display:'inline',color:'#333434fa',fontSize:'1.1rem'}}>City:</Typography>
         <Typography variant='body1' sx={{display:'inline',marginRight:'4rem'}}> Lahore</Typography>
         {/* State */}
         <Typography variant='h6' sx={{display:'inline',color:'#333434fa',fontSize:'1.1rem'}}>State:</Typography>
         <Typography variant='body1' sx={{display:'inline'}}> Punjab</Typography>
         </Box>
       <Box sx={{display:'flex',justifyContent:'end',margin:'2rem 0 7rem 0'}}>
            {/* <Button variant='contained' color='primary'>Approve</Button> */}
            {/* <Button variant='contained' color='secondary' sx={{color:'white',margin:'0 0.5rem'}}>Reject</Button> */}
            <ClearIcon fontSize='small' color='secondary'/>
            <Typography variant='caption' color='secondary'>Rejected</Typography>
         </Box>
    </Box>
  )
}
