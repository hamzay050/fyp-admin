import { Box, Divider, Grid, Typography } from '@mui/material'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import Navbar from "../Admin/Navbar"
import React from 'react'
import Image from 'next/image'
import Charts from '@/components/Admin/Charts'

const HeroSection = () => {
  const data = [
    {
      name: '11 May',
      Expense: 4000,
      Income: 2400,
      amt: 2400,
    },
    {
      name: '12 May',
      Expense: 3000,
      Income: 1398,
      amt: 2210,
    },
    {
      name: '13 May',
      Expense: 2000,
      Income: 9800,
      amt: 2290,
    },
    {
      name: '14 May',
      Expense: 2780,
      Income: 3908,
      amt: 2000,
    },
    {
      name: '15 May',
      Expense: 1890,
      Income: 4800,
      amt: 2181,
    },
    {
      name: '16 May',
      Expense: 2390,
      Income: 3800,
      amt: 2500,
    },
    {
      name: '17 May',
      Expense: 3490,
      Income: 4300,
      amt: 2100,
    },
  ];
  return (
    <>
     {/* <Navbar /> */}
    <Box mt="40px" >
   
        <Grid container spacing={6}>
            <Grid item lg={3} md={3} sm={3} xs={3}>
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
            <Grid item lg={3} md={3} sm={3} xs={3}>
            
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
            <Grid item lg={3} md={3} sm={3} xs={3}>
           
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
            <Grid item lg={3} md={3} sm={3}>
              helloo

            </Grid>
            <Grid item lg={7} md={7}>
            <Box height="330px" width="550px" textAlign="center"  borderRadius="27px" backgroundColor="#FFFFFF"  boxShadow="  5px 5px 10px #dbdbdb,
            -5px -5px 10px #ffffff ">
              <Typography variant='h5'>
                Daily Revenue Report
              </Typography>
              <Divider/>
              <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Income" fill="#26A59A" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="Expense" fill="#FFDF6C" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
              </Box>
            </Grid>
            <Grid item lg={5} md={5}>
          <Box height="330px" width="330px" textAlign="center"  borderRadius="27px" backgroundColor="#FFFFFF"  boxShadow="  5px 5px 10px #dbdbdb,
            -5px -5px 10px #ffffff ">
<Charts/>
          </Box>
            </Grid>
        </Grid>
        {/* <Grid container>
       
        </Grid> */}
    </Box>
    </>
  )
}

export default HeroSection;