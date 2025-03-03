import React from 'react'

const Header = ({category,title}) => {
  return (
      
  <div className='my-10'>
    <p className='text-gray-400 '>{category}</p>
    <p className='text-3xl font-extrabold mt-2 text-slate-900 tracking-tight'>{title}</p>
  </div>
  )
}

export default Header
