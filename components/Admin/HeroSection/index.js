import { Box, Divider, Grid, Typography } from '@mui/material'
// import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import Navbar from '../Navbar'
import React from 'react'
import Image from 'next/image'
import Charts from '@/components/Admin/Charts'

const HeroSection = () => {
  const data = [ 
    {
      name: 'May 1',
      Male: 4,
      Female: 2,
         amt: 4,
    },
    {
      name: 'May 2',
     Male: 4,
      Female: 2,
      amt: 2210,
    },
    {
      name: 'May 3',
      Male: 4,
      Female: 2,
      amt: 2290,
    },
    {
      name: 'May 4',
     Male: 9,
      Female: 2,
      amt: 2000,
    },
    {
      name: 'May 5',
     Male: 4,
      Female: 5,
      amt: 2181,
    },
    {
      name: 'May 6',
     Male: 6,
      Female: 10,
      amt: 2500,
    },
    {
      name: 'May 7',
      Male: 14,
      Female: 5,
      amt: 2100,
    },
  ];
  
  return (
    <>
     <Navbar />
     

    <Box mt="40px" overflow="hidden" >
   
        <Grid container spacing={6}>
            <Grid item lg={4} md={4} sm={6} xs={6}>
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
               
            </Grid>
           
            <Grid item lg={12} md={12} sm={12}>
           <Box height="350px" width="1000px"  textAlign="center"  borderRadius="27px" backgroundColor="#FFFFFF"  boxShadow="5px 5px 10px #dbdbdb,
            -5px -5px 10px #ffffff ">
              <Typography variant='h5'> Daily Doctors Enroll</Typography>
              <Divider/>
              <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 50,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Male" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Female" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
            </Box>
           </Grid>
           
        </Grid>
{/*         
        <Grid container>
        
        </Grid> */}
    </Box>
    </>
  )
}

export default HeroSection;