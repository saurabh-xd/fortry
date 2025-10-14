import React from 'react'

const cn = (...classes: String[])=> classes.join(" ");

function Card() {
  return (
    <div className={cn('w-full rounded-2xl min-h-100 bg-neutral-100',
    'bg-[radial-gradient(var(--color-neutral-200)_1px,transparent_1px)]',
    '[background-size:10px_10px]')}>
 
    </div>
  )
}

export default Card