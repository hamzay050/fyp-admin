import { Box, Typography } from '@mui/material'
import { useRouter } from 'next/router';
import { usePathname} from 'next/navigation';
import Image from 'next/image'
import Link from 'next/link'
import DashboardIcon from '@mui/icons-material/Dashboard';
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
  // const [value, setValue] =useState()
  const router = useRouter()
  const Pathname = usePathname()
  return (
    
    <Box height="100vh" backgroundColor="white" >
      <Box sx={{display:'flex',alignItems:'center'}}>
                <Image
                src='/Assests/mlogo.png'
                width={70}
                height={70}
                style={{margin:'0'}}
                alt='Logo Image'/>
                <Typography sx={{fontWeight:'600'}}>HEALTH EASE</Typography>
             </Box>
             <Box display="flex" ml="90px"   flexDirection="column"   >
    <Link href="/admin/dashboard"  style={{textDecoration:'none'}} className={`${router.pathname=="/admin/dashboard"?"#E3E8FC":''}`}   >
      <Box  display="flex" marginTop="20px" height="45px" alignItems="center"  sx={{'&:hover':{
      backgroundColor:"#E3E8FC"
    },borderRadius:"15px 0px 0px 15px",}} >
      {/* sx={style.box}  */}
      <DashboardIcon fontSize='medium' /> 
      <Typography variant='h5' sx={{marginLeft:"1px"}}>
    
     Dashoard
    </Typography>
    </Box>
    </Link>
    <Link href="" style={{textDecoration:'none' }}>
    <Box display='flex' marginTop="30px"  height="45px" alignItems="center"  sx={{'&:hover':{
      backgroundColor:"#E3E8FC"
    },borderRadius:"10px 0px 0px 10px"}}>
    <AccountCircleIcon />
    <Typography variant='h5' sx={{marginLeft:"1px"}} >
    
      Users Details
    </Typography>
    </Box>
  
    </Link>
    <Link href="/admin/requests" style={{textDecoration:'none' }}>
    <Box display='flex' marginTop="30px"  height="45px" alignItems="center"  sx={styles.box}
    // sx={{'&:hover':{
    //   backgroundColor:"#E3E8FC"
    // },'&:active':{backgroundColor:"#E3E8FC"},borderRadius:"10px 0px 0px 10px"}} 
    >
    <AccountCircleIcon />
    <Typography variant='h5' sx={{marginLeft:"4px"}} >
    
     Requests
    </Typography>
    </Box>
  
    </Link>
    </Box>
      </Box>
  )
}

export default Sidebar;