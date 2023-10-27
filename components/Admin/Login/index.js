import { Box, Stack, Typography,TextField, Button, Divider} from '@mui/material'
import React from 'react'
import Link from 'next/link'
const Login = () => {
  return (
    <Box  display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Box sx={{height:"65%",width:"33%", borderRadius:"10px",backgroundColor:"white"}}>
          <Typography variant='h5' sx={{textAlign:'center',margin:'1rem 0',fontWeight:600,color:'#424140b8'}}>Admin Login</Typography>
          <Divider/>
          <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'60%'}}>
            <TextField
            variant='standard'
            label='Email'
            type='email'
            sx={{width:'80%',margin:'1rem 0'}}/>
             <TextField
            variant='standard'
            label='Password'
            type='password'
            sx={{width:'80%',margin:'1rem 0'}}/>
          </Box>
          <Link href='/admin/dashboard' style={{textDecoration:'none',display:'flex',justifyContent:'center'}}>
            <Button variant='contained' color='secondary' sx={{color:'white',width:'80%'}}>Login</Button>
          </Link>
        </Box>
    </Box>
  )
}

export default Login;