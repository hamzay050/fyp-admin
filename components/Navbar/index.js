import { AppBar,Box, Toolbar, Typography ,Avatar,Button} from '@mui/material'
import LogoutIcon from "@mui/icons-material/Logout";
import PasswordIcon from '@mui/icons-material/Password';

import Image from 'next/image'

import React,{useState,useRef,useEffect} from 'react'

const Index = () => {
  const [Setting, setSetting] = useState(false);
  const menu = useRef();

  const toggleMenu = () => {
    setSetting(!Setting);
  };
  useEffect(() => {
    let handler = (e) => {
      if (menu.current && !menu.current.contains(e.target)) {
        setSetting(false);
      }
    };
    document.addEventListener("mousedown", handler);
  }, []);
  return (
   <>
   <AppBar position="static" elevation="0" >
    <Toolbar variant='dense' sx={{justifyContent:"space-between" }}>
      
     
    <Box sx={{display:'flex',alignItems:'center',color:"black"}}>
                <Image
                src='/Assests/mlogo.png'
                width={60}
                height={53}
                alt='Logo Image'/>
                <Typography variant='body2' sx={{fontWeight:'600',color:'white'}}>HEALTH EASE</Typography>
             </Box>
             <Avatar
                // size="small"
                onClick={toggleMenu}
                sx={{ cursor: "pointer", border: "1px solid #d7c2c29e"  ,width:"40px", length:"40px"}}
                src="/Assests/hero1.png"
              >
                M
              </Avatar>
              {Setting && (
              <Box 
                sx={{
                  padding:"10px",
                  position: "absolute",
                  top:"80%",
                  right: "5%",
                  width: "140px",
                  height: "auto",
                  // boxShadow:"5px 5px 5px  lightblue",
                  backgroundColor: "white",
                  display: "flex",
                  justifyContent:"center",
                  alignItems: "start",
                  flexDirection: "column",
                  border: "1px solid #d7c2c29e",
                  borderRadius: "5px",
                  zIndex: "1",
                }}
              >
 <Button  color="secondary" sx={{ margin: "0rem 1rem", }} startIcon={<LogoutIcon />}>
                      <Typography variant="body2" textTransform="none" sx={{ fontSize: "12px",
                    // fontWeight:"500"
                    }}>  Logout</Typography>
                      
                       </Button>{" "}
                       <Button  color="secondary" sx={{ margin: "0rem 1rem", }} startIcon={<PasswordIcon />}>
                      <Typography variant="body2" textTransform="none" sx={{ fontSize: "12px",
                    // fontWeight:"500"
                    }}>  Change Password</Typography>
                      
                       </Button>{" "}
              </Box>
               )}
          
    </Toolbar>
   </AppBar>
   </>
  )
}

export default Index