import { Box, Stack, Typography,TextField, Button, Divider} from '@mui/material'
import React, { useState,useContext } from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";
import { POST } from '@/services/httpClient'
import { AppContext } from "@/context/appContext";


const Login = () => {
  const { isLoading, setIsLoading, setSnackbarState } = useContext(AppContext);
  const [data, setData] = useState({
    email:'',password:''
  })
  const router= useRouter();
  const handleLogin = async () => {
    setIsLoading(true);
    const params = {
      email: data.email,
      password: data.password,
    };

    try {
      const response = await POST("/auth/login", params);

      console.log(response);

      if (!response.error) {
        localStorage.setItem("userData", JSON.stringify(response.data));
        router.push("/dashboard");
      } else {
        console.log("Login failed");
        setSnackbarState({
          severity: "error",
          open: true,
          message: "Login failed",
        });
      }
    } catch (error) {
      console.log("🚀 ~ file: index.js:46 ~ handleLogin ~ error:", error);
      console.log("An error occurred:", error);
      setSnackbarState({
        severity: "error",
        open: true,
        message: "An error occurred",
      });
    }
    setIsLoading(false);
  };
  return (
    <Box  display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Box sx={{height:"65%",width:"33%", borderRadius:"10px",backgroundColor:"white"}}>
          <Typography variant='h5' sx={{textAlign:'center',margin:'1rem 0',fontWeight:600,color:'#424140b8'}}>Admin Login</Typography>
          <Divider/>
          <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'60%'}}>
            <TextField
            variant='standard'
            label='Email'
            value={data.email}
            onChange={(e)=>setData({...data,email:e.target.value})}
            type='email'
            sx={{width:'80%',margin:'1rem 0'}}/>
             <TextField
            variant='standard'
            label='Password'
            type='password'
            value={data.password}
            onChange={(e)=>setData({...data,password:e.target.value})}
            sx={{width:'80%',margin:'1rem 0'}}/>
          </Box>
          <Box  sx={{textDecoration:'none',display:'flex',justifyContent:'center'}}>
            <Button onClick={handleLogin} variant='contained' color='secondary' sx={{color:'white',width:'80%'}}>Login</Button>
          </Box>
        </Box>
    </Box>
  )
}

export default Login;