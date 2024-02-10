import { Box, Typography,Button, Divider,Avatar } from '@mui/material'
import { useRouter } from 'next/router';
import { usePathname} from 'next/navigation';
import Image from 'next/image'
import Link from 'next/link'
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import DashboardIcon from '@mui/icons-material/Dashboard';
import RecommendIcon from '@mui/icons-material/Recommend';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import CloseIcon from '@mui/icons-material/Close';
import PendingIcon from '@mui/icons-material/Pending';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React ,{useState} from 'react'

const styles ={
  box:{
    '&:hover':{
      backgroundColor:"#E3E8FC"
    },
    '&:active':{backgroundColor:"#E3E8FC"},
    borderRadius:"10px 0px 0px 10px"
  }
}
const Sidebar = () => {

  return (
    
    <Box height="100vh" width={250} sx={{backgroundColor:'#26a69a'}} >
      <Box sx={{display:'flex',alignItems:'center',padding:'0.5rem 0.5rem 0.2rem 0.5rem'}}>
                <Image
                src='/Assests/mlogo.png'
                width={60}
                height={60}
                alt='Logo Image'/>
                <Typography variant='body2' sx={{fontWeight:'600',color:'white'}}>HEALTH EASE</Typography>
             </Box>
                <Divider sx={{borderColor:'rgb(255 255 254 / 58%)',width:'90%',marginLeft:'0.6rem',marginBottom:'1.6rem'}}/>

             <Box sx={{display:'flex',alignItems:'center',margin:'1rem 2rem'}}>
              <DashboardCustomizeIcon fontSize='small' sx={{color:'white',margin:'0 0.8rem 0 0.3rem'}}/>
             <Link href='/dashboard' style={{textDecoration:'none'}}><Button variant='text' sx={{color:'white'}}>Dashboard</Button></Link> 
             </Box>

              <Typography variant='caption' sx={{color:'#c2c5c4e6',margin:'1rem'}}>Doctor Requests</Typography>
             <Box sx={{margin:'0.5rem 2rem'}}>
              <Box sx={{display:'flex',alignItems:'center',}}>
               <PendingActionsIcon fontSize='small' sx={{color:'white',margin:'0 0.8rem 0 0.3rem'}}/>
               <Link href='/doctor-request/pending' style={{textDecoration:'none'}}><Button variant='text' sx={{color:'white'}}>Pending</Button></Link>
              </Box>
              <Box sx={{display:'flex',alignItems:'center',}}>
               <RecommendIcon fontSize='small' sx={{color:'white',margin:'0 0.8rem 0 0.3rem'}}/>
               <Link href='/doctor-request/approved' style={{textDecoration:'none'}}><Button variant='text' sx={{color:'white'}}>Approved</Button></Link>
              </Box>
              <Box sx={{display:'flex',alignItems:'center',}}>
               <CloseIcon fontSize='small' sx={{color:'white',margin:'0 0.8rem 0 0.3rem'}}/>
               <Link href='/doctor-request/rejected' style={{textDecoration:'none'}}><Button variant='text' sx={{color:'white'}}>Rejected</Button></Link>
              </Box>
             </Box>
              <Typography variant='caption' sx={{color:'#c2c5c4e6',margin:'1rem'}}>Patient Complaints</Typography>
              <Box sx={{margin:'0.5rem 2rem'}}>
              <Box sx={{display:'flex',alignItems:'center',}}>
               <PendingIcon fontSize='small' sx={{color:'white',margin:'0 0.8rem 0 0.3rem'}}/>
               <Link href='/patient-complaints/pending' style={{textDecoration:'none'}}><Button variant='text' sx={{color:'white'}}>Pending</Button></Link>
              </Box>
              <Box sx={{display:'flex',alignItems:'center',}}>
               <CheckCircleOutlineIcon fontSize='small' sx={{color:'white',margin:'0 0.8rem 0 0.3rem'}}/>
               <Link href='/patient-complaints/fulfilled' style={{textDecoration:'none'}}><Button variant='text' sx={{color:'white'}}>Fulfilled</Button></Link>
              </Box>
              </Box>
              <Divider sx={{borderColor:'rgb(255 255 254 / 58%)',width:'90%',marginLeft:'0.6rem',marginBottom:'1.6rem',marginTop:'8rem'}}/>
                 <Box sx={{margin:'0.5rem 2rem',display:'flex',alignItems:'center'}}>
                 <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                 <Typography variant='body2' sx={{fontWeight:'600',color:'white',margin:'0 1rem'}}>Jimmi Khan</Typography>
                 </Box>
      </Box>
  )
}

export default Sidebar;