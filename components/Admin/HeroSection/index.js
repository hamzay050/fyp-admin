import { Box, Divider, Grid, Typography } from '@mui/material'
// import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  const data = [ 
    {
      name: 'May 1',
      Doctor: 4,
      Patient: 2,
         amt: 4,
    },
    {
      name: 'May 2',
     Doctor: 4,
      Patient: 2,
      amt: 2210,
    },
    {
      name: 'May 3',
      Doctor: 4,
      Patient: 2,
      amt: 2290,
    },
    {
      name: 'May 4',
     Doctor: 9,
      Patient: 2,
      amt: 2000,
    },
    {
      name: 'May 5',
     Doctor: 4,
      Patient: 5,
      amt: 2181,
    },
    {
      name: 'May 6',
     Doctor: 6,
      Patient: 10,
      amt: 2500,
    },
    {
      name: 'May 7',
      Doctor: 14,
      Patient: 5,
      amt: 2100,
    },
  ];
  
  return (
    <>
     

    <Box mt="40px" overflow="hidden" >
   
        <Grid container spacing={6}>
            {/* <Grid item lg={4} md={4} sm={6} xs={6}>
           <Box height="270px" width="250px" textAlign="center"  borderRadius="27px" backgroundColor="#FFFFFF"  boxShadow="5px 5px 10px #dbdbdb,
            -5px -5px 10px #ffffff " >
              <Image  
               src="/Assests/patient.svg"
               width={150}
              height={150}
              />
              <Typography variant='h6'>
                Total Patients
              </Typography>
              <Typography variant='h4' fontWeight={600}>
                1,540
              </Typography>
             
              </Box >
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={6}>
            
            <Box  height="270px" width="250px" textAlign="center"  borderRadius="27px" backgroundColor="#FFFFFF" boxShadow="5px 5px 10px #dbdbdb,
        
            -5px -5px 10px #ffffff ">
              <Image  
               src="/Assests/consulation.svg"
               width={150}
              height={150}
              />
               <Typography variant='h6'>
             Consulation
              </Typography>
              <Typography variant='h4' fontWeight={600}>
                448
              </Typography>
              </Box>
            
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={6}>
           
            <Box height="270px" width="250px" textAlign="center"  borderRadius="27px" backgroundColor="#FFFFFF"  boxShadow="5px 5px 10px #dbdbdb,
            -5px -5px 10px #ffffff ">
               <Image  
               src="/Assests/Doctors.svg"
               width={150}
              height={150}
              />
               <Typography variant='h6'>
                Staff
              </Typography>
              <Typography variant='h4' fontWeight={600}>
                884
              </Typography>
              </Box>
               
            </Grid> */}
           
            <Grid item lg={12} md={12} sm={12}>
           <Box height="250px" width="1000px"  textAlign="center" sx={{border:'1px solid #d5d3d3',borderRadius:'5px',margin:'0 1rem'}}>
              <Typography variant='body1' sx={{fontWeight:'600',color:'#3c3e3ee6',margin:'0.5rem 0'}}> Daily Enrollments</Typography>
              <Divider/>
              <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 0,
            right: 30,
            left: 20,
            bottom: 45,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Doctor" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Patient" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
            </Box>
           </Grid>
           
        </Grid>
    </Box>
    </>
  )
}

export default HeroSection;