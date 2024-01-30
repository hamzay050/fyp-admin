import React from 'react'
import HeroSection from '../HeroSection'
import VaccinesIcon from '@mui/icons-material/Vaccines';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';
import {Box,Typography} from '@mui/material'
import UpcomingIcon from '@mui/icons-material/Upcoming';
import BarChartIcon from '@mui/icons-material/BarChart';
import PeopleIcon from '@mui/icons-material/People';
import GridViewIcon from '@mui/icons-material/GridView';

export default function Dashboard() {
  return (
    <>
    <Typography sx={{margin:'1.5rem 0.5rem',fontWeight:600,color:'#504e4e'}}>Dashboard</Typography>
    <Box sx={{display:'flex'}}>
     <Box sx={{width:'252px',border:'1px solid #ddd8d8',borderRadius:'9px',boxShadow:1,height:'110px',margin:' 0.5rem',backgroundColor:'white'}}>
        <Box sx={{width:'50px',height:'50px',border:'1px solid #26a69a',borderRadius:'9px',position:'relative',left:'6%',bottom:'14%',display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'black'}}>
          <UpcomingIcon fontSize='medium' sx={{color:'#fff'}}/>
        </Box>
        <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'end',margin:'0 1rem'}}>
          <Typography variant='body2' sx={{color:'#9fa5a3',fontWeight:600}}>Total Doctor</Typography>
          <Typography variant='body1' sx={{fontWeight:600,color:'#4f5050'}}>3000</Typography>
        </Box>
     </Box>
     <Box sx={{width:'252px',border:'1px solid #ddd8d8',borderRadius:'9px',boxShadow:1,height:'110px',margin:' 0.5rem',backgroundColor:'white'}}>
        <Box sx={{width:'50px',height:'50px',border:'1px solid #26a69a',borderRadius:'9px',position:'relative',left:'6%',bottom:'14%',display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#4b4bdbd1'}}>
          <BarChartIcon fontSize='medium' sx={{color:'#fff'}}/>
        </Box>
        <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'end',margin:'0 1rem'}}>
          <Typography variant='body2' sx={{color:'#9fa5a3',fontWeight:600}}>Total Doctor</Typography>
          <Typography variant='body1' sx={{fontWeight:600,color:'#4f5050'}}>3000</Typography>
        </Box>
     </Box>
     <Box sx={{width:'252px',border:'1px solid #ddd8d8',borderRadius:'9px',boxShadow:1,height:'110px',margin:' 0.5rem',backgroundColor:'white'}}>
        <Box sx={{width:'50px',height:'50px',border:'1px solid #26a69a',borderRadius:'9px',position:'relative',left:'6%',bottom:'14%',display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#2ba92bd1'}}>
          <GridViewIcon fontSize='medium' sx={{color:'#fff'}}/>
        </Box>
        <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'end',margin:'0 1rem'}}>
          <Typography variant='body2' sx={{color:'#9fa5a3',fontWeight:600}}>Total Doctor</Typography>
          <Typography variant='body1' sx={{fontWeight:600,color:'#4f5050'}}>3000</Typography>
        </Box>
     </Box>
     <Box sx={{width:'252px',border:'1px solid #ddd8d8',borderRadius:'9px',boxShadow:1,height:'110px',margin:' 0.5rem',backgroundColor:'white'}}>
        <Box sx={{width:'50px',height:'50px',border:'1px solid #df3f5bc2',borderRadius:'9px',position:'relative',left:'6%',bottom:'14%',display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#df3f5bc2'}}>
          <PeopleIcon fontSize='medium' sx={{color:'#fff'}}/>
        </Box>
        <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'end',margin:'0 1rem'}}>
          <Typography variant='body2' sx={{color:'#9fa5a3',fontWeight:600}}>Total Doctor</Typography>
          <Typography variant='body1' sx={{fontWeight:600,color:'#4f5050'}}>3000</Typography>
        </Box>
     </Box>
     </Box>
    </>
  )
}