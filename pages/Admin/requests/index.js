import React from 'react'
import Sidebar from '@/components/Admin/Sidebar'
// import Home from  '@/components/Admin/Home'
import RequestList from '@/components/Admin/RequestList'
import { Box, Grid  } from '@mui/material'
const index = () => {
  return (
    <div>
      
       <Box>
        <Grid container spacing={4}>
            <Grid item lg={3} >
                <Box>
        <Sidebar/>
        </Box>
        </Grid>
        <Grid item lg={9}>
        <RequestList/>
    </Grid>
        </Grid>

    </Box>
      
    </div>
  )
}

export default index