import React from 'react'

function Commonimgbox({img}) {
  return (
    <>
      <div className='flex justify-center items-center px-5 py-12.5 rounded-14 bg-[#FAFAFA] dark:bg-black-700'>
        <img src={img} alt="boximg" className='' />
      </div>
    </>
  )
}

export default Commonimgbox
