import React from 'react'
import PendingRequest from '@/components/PendingRequest'
import SecurePage from '@/components/SecurePage'

export default function index() {
  return (
    <SecurePage>
      <PendingRequest/>
    </SecurePage>
  )
}
