import  React,{useState,useEffect,useRef} from 'react';

import {Box,Typography,Grid, Button,Avatar,IconButton, Menu,MenuItem,Link} from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function PendingComplaint() {
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
    <Box sx={{display:'flex',justifyContent:'center',margin:'2rem 0',height:"120px"}}>
      <Grid container  justifyContent="space-around" alignItems='center' sx={{backgroundColor:'#fff',border:'1px solid #d5d3d3',borderRadius:'10px',width:'80%',maxHeight:"200px", mixHeight:'auto',boxShadow:1}}>
        <Grid item xs={1} sx={{display:"flex" ,justifyContent:"center"}}>
          <Box display="flex" alignItems="center">
        <Avatar  alt="Remy Sharp" src="/static/images/avatar/1.jpg"   sx={{ width: 56, height: 56 }}
       
 />
  </Box>
        </Grid>
        <Grid item xs={9}>
          <Box  sx={{padding:"15px 0px 0px"}}>
            <Typography variant='body1' sx={{fontSize:"14px",fontWeight:"600", marginBottom:'0.2rem'}}>John Deo</Typography>
            <Typography variant='body2' sx={{fontSize:"12px"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora hic iusto sint, ducimus recusandae earum possimus cumque quis nulla! Qui!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis ea praesentium dolor nobis numquam exercitationem incidunt tenetur eveniet, velit earum.</Typography>
          </Box>
         
        </Grid>
        <Grid item xs={1}  >
      
        <MoreHorizIcon sx={{position:'relative'}}    onClick={toggleMenu}      
 />
     
      {Setting && (
              <Box 
                sx={{
                  padding:"10px",
                  position: "absolute",
                  width: "130px",
                  height: "auto",
                  boxShadow:"5px 5px 5px  lightblue",
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
                <Link
                  href=""
                  style={{
                    textDecoration: "none",
                    fontSize: "12px",
                    // fontWeight:"500",
                    // margin: "0.2rem",
                    color: "black",
                    display: "flex",
                    alignItems: "center",
                    // backgroundColor:"green"
                  }}
                >
               <Box width="108px" textAlign="center" backgroundColor="rgb(239,230,255)" borderRadius="5px" sx={{backdropFilter:"blur(10px)"}}>
                  <Typography variant='body1' color="#800080" fontSize="15px">Response</Typography>
                  </Box>
                  
                </Link>
                <Link
                  href=""
                  style={{
                    textDecoration: "none",
                    fontSize: "12px",
                    // fontWeight:"500",
                    marginTop: "0.4rem",
                    color: "black",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box width="108px" textAlign="center" backgroundColor="rgb(221,240,238)" borderRadius="5px" sx={{backdropFilter:"blur(10px)"}}>
                  <Typography variant='body1' color="#29c4b6" fontSize="15px">Fullfill</Typography>
                  </Box>
                  
                
                </Link>
              
              </Box>
            )}
      
        </Grid>
      </Grid>
      
    </Box>
    </>
  )
}
