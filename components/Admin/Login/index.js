import { Box, Stack, Typography,TextField, Button} from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import Avatar from '@mui/material/Avatar';
import React from 'react'

const index = () => {
  return (
    <Box  display="flex" justifyContent="center" alignItems="center" height="100vh" backgroundColor="#E3E8FC">
        {/* <Grid> */}
            {/* <Grid item lg={12} md={12}> */}
        <Stack sx={{height:"80%",width:"40%",boxShadow: "20px 20px 50px grey", borderRadius:"15px", display:"flex", justifyContent:"center",alignItems:"center",backgroundColor:"white"}}>
        {/* <Avatar sx={{ backgroundColor:"#4506A8", width:"80px", height:"80px", marginTop:"50px" }}>N</Avatar> */}
        <Typography variant='h3' sx={{paddingBottom:"100px"}}>Login</Typography>
    
        
        <TextField id="filled-basic" label="Email" variant="filled" sx={{marginBottom:"30px" ,width:"70%"}} />
        <TextField id="filled-basic" label="Password" variant="filled" type='password' sx={{marginBottom:"80px", width:"70%"}}/>
        <Button  sx={{backgroundColor:"#4506A8",color:"white",width:"50%"}}>
            Login
        </Button>
        
        </Stack>

        {/* </Grid>
        </Grid> */}
    </Box>
  )
}

export default index