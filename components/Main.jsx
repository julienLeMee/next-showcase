import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

export default function Main() {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>LET'S BUILD SOMETHING TOGETHER</p>
          <h1 className='py-4 text-gray-700'>Hi I'm <span className='text-[#5651e5]'>Julien</span></h1>
          <h1 className='py-2 text-gray-700'>Web Developer</h1>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>I'm based in Montréal, Canada. Currently, I'm focused on building digital experiences with <span className='text-[#5651e5]'>Three.js</span> and responsive and dynamic website with <span className='text-[#5651e5]'>Next.js</span>.</p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <Link href='https://www.linkedin.com/in/julien-le-mee/' target='_blank'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:text-[#5651e5] ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </Link>
            <Link href='https://github.com/julienLeMee' target='_blank'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:text-[#5651e5] ease-in duration-300'>
                <FaGithub />
              </div>
            </Link>
            <Link href='mailto:julemee@gmail.com' target='_blank'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:text-[#5651e5] ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='https://twitter.com/majin__bun' target='_blank'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:text-[#5651e5] ease-in duration-300'>
                <FaTwitter />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
