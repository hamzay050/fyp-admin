import React from 'react'
import RejectedRequest from '@/components/RejectedRequest'
import SecurePage from '@/components/SecurePage'

export default function index() {
  return (
    <SecurePage>
      <RejectedRequest/>
    </SecurePage>
  )
}
