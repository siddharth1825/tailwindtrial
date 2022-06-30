import React from 'react'

function Content() {
  return (
    <div className='flex flex-row justify-center'>
        <div className='flex flex-col justify-center items-center bg-white h-screen py-40'>
            <img src="https://i.imgflip.com/4se9be.jpg" alt="" className='h-full rounded mb-20 shadow'/>
            <div className='flex flex-col justify-center'>
                <h2 className='text-5xl mb-2'>BRUH</h2>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center bg-white h-screen py-40'>
            <img src="https://i1.sndcdn.com/artworks-kBpT6H61ZkBKKqW2-Ivgkuw-t500x500.jpg" alt="" className='h-full rounded mb-20 shadow'/>
            <div className='flex flex-col justify-center'>
                <h2 className='text-5xl mb-2'>BRUH MOMENT</h2>
            </div>
        </div>
    </div>
  )
}

export default Content