import React from 'react'
import ApprovedRequest from '@/components/ApprovedRequest'
import SecurePage from '@/components/SecurePage'

export default function index() {
  return (
    <SecurePage>
      <ApprovedRequest/>
    </SecurePage>
  )
}
