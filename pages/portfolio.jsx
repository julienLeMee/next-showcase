import Image from 'next/image'
import React from 'react'
import portfolioImg from '../public/projects/portfolio.png'

const portfolio = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
          <Image className='absolute z-1' layout='fill' objectFit='cover' src={portfolioImg} alt='portfolio' />
          <div className='absolute top-[70%]  max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
            <h2 className='py-2'>Portfolio</h2>
            <h3 className=''>Three JS | HTML | CSS | JS</h3>
          </div>
      </div>
    </div>
  )
}

export default portfolio
