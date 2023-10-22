import { Box, Grid } from '@mui/material'
import React from 'react'
import Sidebar from '@/components/Admin/Sidebar'
import HeroSection from '@/components/Admin/HeroSection'

const Home = () => {
  return (
    <Box>
        <Grid container spacing={4}>
            <Grid item lg={3} >
                <Box>
        <Sidebar/>
        </Box>
        </Grid>
        <Grid item lg={9}>
     <HeroSection  />
    </Grid>
        </Grid>

    </Box>
  )
}

export default Home
