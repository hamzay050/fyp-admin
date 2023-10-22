import { Box, Grid } from '@mui/material'
import React from 'react'
import Sidebar from '@/component/Admin/Sidebar'
import HeroSection from '@/component/Admin/HeroSection'

const index = () => {
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

export default index
