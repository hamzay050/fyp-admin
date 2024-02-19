import { Avatar, Box, Typography } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import React from 'react'

const Index = () => {
  return (
    <Box height="100vh" width={300} sx={{backgroundColor:'white'}}  >
<Box height="150px" display="flex" justifyContent="center" alignItems="center" gap="4px" >
      <Box width="80px" display="flex" justifyContent="center" alignItems="center" flexDirection="column">
      <Avatar alt="Remy Sharp" sx={{width:'50px',height:'50px'}} src="/static/images/avatar/1.jpg" />
       <Typography variant='body2' fontSize="12px" fontWeight="600">John Deo</Typography>
      </Box>

      </Box>
      <Box>

        <Typography pl="8px"   variant='body1' fontSize="18px">Conatct Info</Typography>
        <Box display="flex" height="20x" gap="5px" alignItems="center" pl="8px" pt="14px">
        <EmailIcon fontSize='small' sx={{color:'#6a6a6a'}}/>
        <Typography variant='body2' sx={{color:'#6a6a6a'}}> Kashif@gamil.com</Typography>
        </Box>
        <Box display="flex" height="20x" gap="5px" alignItems="center" pl="8px" pt="14px">
        <PhoneIcon fontSize='small' sx={{color:'#6a6a6a'}}/>
        <Typography variant='body2' sx={{color:'#6a6a6a'}}> +92 3073287682</Typography>
        </Box>
        <Box display="flex" height="20x" gap="5px" alignItems="center" pl="8px" pt="14px">
        <AddLocationIcon fontSize='small' sx={{color:'#6a6a6a'}}/>
        <Typography variant='body2' sx={{color:'#6a6a6a'}}> Pakistan</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Index