import HeroSection from '../HeroSection'
import VaccinesIcon from '@mui/icons-material/Vaccines';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';
import {Box,Grid,Typography} from '@mui/material'
import UpcomingIcon from '@mui/icons-material/Upcoming';
import BarChartIcon from '@mui/icons-material/BarChart';
import PeopleIcon from '@mui/icons-material/People';
import GridViewIcon from '@mui/icons-material/GridView';
import LiChart from "../Charts/LineCharts";
import  PiChart   from "@/components/Charts/PieCharts"
import {GET} from "@/services/httpClient"
import { useState,useEffect } from 'react';

export default function Dashboard() {
  const [doctorsCount, setDoctorsCount] = useState(0);
  const [patientsCount, setPatientsCount] = useState(0);
  const [appointmentCount, setAppointmentCount] = useState(0)
  useEffect(() => {
    async function fetchData() {
      try {
        const doctorsResponse = await GET('/doctor/doctor-profiles');
        const patientsResponse = await GET('/profile/patient/profiles');
        const appointmentResponse = await GET('/appointment');
        setDoctorsCount(doctorsResponse.length);
        setPatientsCount(patientsResponse.length);
        setAppointmentCount(appointmentResponse.length)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
    <Typography sx={{margin:'1.5rem 0.5rem',fontWeight:600,color:'#504e4e'}}>Dashboard</Typography>
    <Box sx={{display:'flex', justifyContent:"space-around"}}>
     <Box sx={{width:'300px',border:'1px solid #ddd8d8',borderRadius:'9px',boxShadow:1,height:'110px',backgroundColor:'white'}}>
        <Box sx={{width:'50px',height:'50px',border:'1px solid #26a69a',borderRadius:'9px',position:'relative',left:'6%',bottom:'14%',display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'black'}}>
          <UpcomingIcon fontSize='medium' sx={{color:'#fff'}}/>
        </Box>
        <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'end',margin:'0 1rem'}}>
          <Typography variant='body2' sx={{color:'#9fa5a3',fontWeight:600}}>Total Doctor</Typography>
          <Typography variant='body1' sx={{fontWeight:600,color:'#4f5050'}}>{doctorsCount}</Typography>
        </Box>
     </Box>
     {/* <Box sx={{width:'252px',border:'1px solid #ddd8d8',borderRadius:'9px',boxShadow:1,height:'110px',margin:' 0.5rem',backgroundColor:'white'}}>
        <Box sx={{width:'50px',height:'50px',border:'1px solid #26a69a',borderRadius:'9px',position:'relative',left:'6%',bottom:'14%',display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#4b4bdbd1'}}>
          <BarChartIcon fontSize='medium' sx={{color:'#fff'}}/>
        </Box>
        <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'end',margin:'0 1rem'}}>
          <Typography variant='body2' sx={{color:'#9fa5a3',fontWeight:600}}>Total Doctor</Typography>
          <Typography variant='body1' sx={{fontWeight:600,color:'#4f5050'}}>3000</Typography>
        </Box>
     </Box> */}
     <Box sx={{width:'300px',border:'1px solid #ddd8d8',borderRadius:'9px',boxShadow:1,height:'110px',backgroundColor:'white'}}>
        <Box sx={{width:'50px',height:'50px',border:'1px solid #26a69a',borderRadius:'9px',position:'relative',left:'6%',bottom:'14%',display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#2ba92bd1'}}>
          <GridViewIcon fontSize='medium' sx={{color:'#fff'}}/>
        </Box>
        <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'end',margin:'0 1rem'}}>
          <Typography variant='body2' sx={{color:'#9fa5a3',fontWeight:600}}>Total Patients</Typography>
          <Typography variant='body1' sx={{fontWeight:600,color:'#4f5050'}}>{patientsCount}</Typography>
        </Box>
     </Box>
     <Box sx={{width:'300px',border:'1px solid #ddd8d8',borderRadius:'9px',boxShadow:1,height:'110px',backgroundColor:'white'}}>
        <Box sx={{width:'50px',height:'50px',border:'1px solid #df3f5bc2',borderRadius:'9px',position:'relative',left:'6%',bottom:'14%',display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#df3f5bc2'}}>
          <PeopleIcon fontSize='medium' sx={{color:'#fff'}}/>
        </Box>
        <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'end',margin:'0 1rem'}}>
          <Typography variant='body2' sx={{color:'#9fa5a3',fontWeight:600}}>Total Appointments</Typography>
          <Typography variant='body1' sx={{fontWeight:600,color:'#4f5050'}}>{appointmentCount}</Typography>
        </Box>
     </Box>
     </Box>
     <Grid container spacing={3} sx={{marginTop:"8px"}}>
      <Grid item sm={8}>
      <Box bgcolor="white" height="350px" boxShadow="1" borderRadius='9px'>
        <Typography variant='body1' pt="20px" pl="15px">
          Monthly Registration
        </Typography>
        <LiChart/>
      </Box>
      </Grid>
      <Grid item sm="4">
        <Box bgcolor="white" height="350px"  boxShadow="1" borderRadius='9px' marginRight="10px" >
        <Typography variant='body1' pt="20px" pl="15px">
          Appointment status
          
        </Typography>
        <Box height="280px" display="flex" alignItems="center">
        <PiChart/>
        </Box>
       
        </Box>

      </Grid>

     </Grid>
    </>
  )
}
