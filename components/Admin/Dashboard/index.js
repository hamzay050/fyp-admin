import React from 'react'
import HeroSection from '../HeroSection'
import VaccinesIcon from '@mui/icons-material/Vaccines';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';
import {Box,Typography} from '@mui/material'

export default function Dashboard() {
  return (
    <>
      <Typography variant='body1' sx={{color:'#3c3e3ee6',fontWeight:'600',margin:'1rem'}}>Overall Records</Typography>  
    <Box m='1rem 0' sx={{display:'flex',justifyContent:'space-evenly'}}>
    <Box sx={{width:'230px',height:'105px',backgroundColor:'white',display:'flex',alignItems:'center',justifyContent:'space-evenly',border:'1px solid #d5d3d3',borderRadius:'5px'}}>
        <Box>
          <VaccinesIcon fontSize='medium' color='secondary'/>
        </Box>
        <Box sx={{display:'flex',alignItems:'center',flexDirection:'column'}}>
      <Typography variant='body1'sx={{fontWeight:'600'}}>2000</Typography>
        <Typography variant='caption'>Doctor Entrolled</Typography>

        </Box>
      </Box>
      <Box sx={{width:'230px',height:'105px',backgroundColor:'white',display:'flex',alignItems:'center',justifyContent:'space-evenly',border:'1px solid #d5d3d3',borderRadius:'5px'}}>
        <Box>
          <PersonIcon fontSize='medium' color='secondary'/>
        </Box>
        <Box sx={{display:'flex',alignItems:'center',flexDirection:'column'}}>
      <Typography variant='body1'sx={{fontWeight:'600'}}>2000</Typography>
        <Typography variant='caption'>Patient Registered</Typography>

        </Box>
      </Box>
      <Box sx={{width:'230px',height:'105px',backgroundColor:'white',display:'flex',alignItems:'center',justifyContent:'space-evenly',border:'1px solid #d5d3d3',borderRadius:'5px'}}>
        <Box>
          <GroupsIcon fontSize='medium' color='secondary'/>
        </Box>
        <Box sx={{display:'flex',alignItems:'center',flexDirection:'column'}}>
      <Typography variant='body1'sx={{fontWeight:'600'}}>2000</Typography>
        <Typography variant='caption'>Total Appointments</Typography>

        </Box>
      </Box>

    </Box>
    <Typography variant='body1' sx={{color:'#3c3e3ee6',fontWeight:'600',margin:'1rem'}}>Weekly Records</Typography>  
    <Box m='1rem 0' sx={{display:'flex',justifyContent:'space-evenly'}}>
    <Box sx={{width:'230px',height:'105px',backgroundColor:'white',display:'flex',alignItems:'center',justifyContent:'space-evenly',border:'1px solid #d5d3d3',borderRadius:'5px'}}>
        <Box>
          <VaccinesIcon fontSize='medium' color='secondary'/>
        </Box>
        <Box sx={{display:'flex',alignItems:'center',flexDirection:'column'}}>
      <Typography variant='body1'sx={{fontWeight:'600'}}>2000</Typography>
        <Typography variant='caption'>Doctor Entrolled</Typography>

        </Box>
      </Box>
      <Box sx={{width:'230px',height:'105px',backgroundColor:'white',display:'flex',alignItems:'center',justifyContent:'space-evenly',border:'1px solid #d5d3d3',borderRadius:'5px'}}>
        <Box>
          <PersonIcon fontSize='medium' color='secondary'/>
        </Box>
        <Box sx={{display:'flex',alignItems:'center',flexDirection:'column'}}>
      <Typography variant='body1'sx={{fontWeight:'600'}}>2000</Typography>
        <Typography variant='caption'>Patient Registered</Typography>

        </Box>
      </Box>
      <Box sx={{width:'230px',height:'105px',backgroundColor:'white',display:'flex',alignItems:'center',justifyContent:'space-evenly',border:'1px solid #d5d3d3',borderRadius:'5px'}}>
        <Box>
          <GroupsIcon fontSize='medium' color='secondary'/>
        </Box>
        <Box sx={{display:'flex',alignItems:'center',flexDirection:'column'}}>
      <Typography variant='body1'sx={{fontWeight:'600'}}>2000</Typography>
        <Typography variant='caption'>Total Appointments</Typography>

        </Box>
      </Box>

    </Box>
    <HeroSection/>
    </>
  )
}
