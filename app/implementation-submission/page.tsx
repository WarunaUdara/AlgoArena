import React from 'react'
import ImplementationSubmissionForm from '@/components/sections/ImplementationSubmissionForm'
import NavBar from '@/components/sections/NavBar'

export const metadata = {
  title: 'Implementation Submission | AlgoArena 2025',
  description: 'Submit your final implementation for AlgoArena 2025',
}

export default function ImplementationSubmissionPage() {
  return <> 
        <NavBar />
        <ImplementationSubmissionForm />
   </>
}
