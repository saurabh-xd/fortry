import dbconnect from '@/lib/dbconnect'
import React from 'react'

function Home() {
  dbconnect()
  return (
    <div className='flex justify-center items-center w-full h-screen'> 
      <div className='flex justify-center items-center'>
        <h2 className='text-2xl font-bold'>fortry a movie website</h2>
       
      </div>
    </div>
  )
}

export default Home