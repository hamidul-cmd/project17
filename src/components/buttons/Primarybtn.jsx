import React from 'react'

function Primarybtn({text,path}) {
  return (
    <>
      <a href={path} className='block py-2.5 px-5 text-sm font-semibold leading-6 text-white bg-orange-500 rounded-full w-fit'>{text}</a>
    </>
  )
}

export default Primarybtn
