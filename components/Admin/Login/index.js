import { Box, Stack, Typography,TextField, Button} from '@mui/material'
// import EmailIcon from '@mui/icons-material/Email';
// import Avatar from '@mui/material/Avatar';
import React from 'react'
import Link from 'next/link'
const Login = () => {
  return (
    <Box  display="flex" justifyContent="center" alignItems="center" height="100vh" backgroundColor="#E3E8FC">
        {/* <Grid> */}
            {/* <Grid item lg={12} md={12}> */}
        <Stack sx={{height:"70%",width:"35%",boxShadow: "20px 20px 50px grey", borderRadius:"15px", display:"flex", justifyContent:"center",alignItems:"center",backgroundColor:"white"}}>
        {/* <Avatar sx={{ backgroundColor:"#4506A8", width:"80px", height:"80px", marginTop:"50px" }}>N</Avatar> */}
        <Typography variant='h4' sx={{paddingBottom:"70px"}}> Admin Login</Typography>
    
        
        <TextField id="filled-basic" label="Email" variant="filled" sx={{marginBottom:"30px" ,width:"70%"}} />
        <TextField id="filled-basic" label="Password" variant="filled" type='password' sx={{marginBottom:"60px", width:"70%"}}/>
        <Link href='/admin/dashboard' style={{textDecoration:'none'}}><Button variant='contained' color='secondary' sx={{color:'white',width:'300px'}}>
            Login
        </Button></Link>
        
        </Stack>

        {/* </Grid>
        </Grid> */}
    </Box>
  )
}

export default Login;