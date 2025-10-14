import React from 'react'

const Grid = () => {
  return (
    <div className='max-w-5xl mx-auto border-x border-neutral-200 bg-gray-100 min-h-screen '>
        <div className='grid grid-cols-3 grid-rows-2 gap-10 p-4'> {/* in one row how much column space */}
            
             <div className='h-full w-full shrink-0 bg-red-300 row-span-2 col-span-1 rounded-lg'/>  {/* col-span-> how much column space it will take  */}
             <div className='h-40 w-full shrink-0 bg-green-200 col-span-2 row-span-1 rounded-lg' />
             <div className='h-40 w-full shrink-0 bg-orange-300 col-span-1 row-span-1 rounded-lg' />
             <div className='h-40 w-full shrink-0 bg-teal-300 col-span-1 row-span-1 rounded-lg'/>
             <div className='h-40 w-full shrink-0 bg-fuchsia-300 col-span-2 row-span-1 rounded-lg'/>
             <div className='h-40 w-full shrink-0 bg-blue-200 col-span-1 rounded-lg'/>
        </div>

    </div>
  )
}

export default Grid