import React from 'react'

function Form() {
  return (
   <form className='h-full w-full bg-gray-50 px-8 py-14'>
    <h1 className='text-4xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-700'>
        This is a <span>crazy</span> good form
    </h1>

    <label htmlFor="email">email</label>
    <input name='email' type="email" placeholder='enter your email' className='outline-none'/>

   </form>
  )
}

export default Form