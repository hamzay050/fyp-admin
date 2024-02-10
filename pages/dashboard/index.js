import React from 'react'
import { Box } from '@mui/material'
import Dashboard from '@/components/Dashboard'
import SecurePage from '@/components/SecurePage'

const index = () => {
  return (
    <SecurePage>
      <Dashboard/> 
    </SecurePage>
  )
}

export default index