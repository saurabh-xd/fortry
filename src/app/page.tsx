import Card from '@/components/Card'
import Form from '@/components/Form'
import Grid from '@/components/grid'
import Hero from '@/components/hero'
import { Navbar } from '@/components/navbar'

import dbconnect from '@/lib/dbconnect'
import React from 'react'

function Home() {
  
  dbconnect()
  return (
   <div className='h-screen mx-auto bg-neutral-100 max-w-4xl flex items-center'>
   <Form/>
   </div>
  )
}

export default Home