import React from 'react'

function Footer() {
  return (
      <div className='w-[100vw] mt-4 ' style={{
        background: 'rgba(0, 0, 0, 0.20)',
        backdropFilter: blur('7.5px')
      }}>
          <p className=' text-center font-normal text-[20px] text-black p-10 '>© [2024] Learnhub. All rights reserved.</p>
    </div>
  )
}

export default Footer