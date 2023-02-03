import Image from 'next/image'
import React from 'react'
// import fermeImg from '../public/projects/ferme.jpg'
import { RiRadioButtonFill } from 'react-icons/ri'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import Link from 'next/link'

const ferme = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
          <Image className='absolute z-1' layout='fill' objectFit='cover' src='https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' alt='portfolio' />
          <div className='absolute top-[70%]  max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-16'>
            <h2 className='py-2'>La Ferme De Novelle</h2>
            <h3>Next.js | Tailwind | Weather API</h3>
          </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-16 grid md:grid-cols-5 gap 8 pt-8'>
        <div className='col-span-4'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>Project</p>
          <h2 className='py-6'>Overview</h2>
          <p className='pr-16'>
            My project, 'La Ferme de Novelle', is a showcase website coded using Next.js, Tailwind css and weather API. The website is designed to present a charolaise farm that specializes in raising free-range chickens and Charolais beef cattle. The layout is designed to be clean and simple, with easy navigation and a modern look. <br />
            The end result is a professional and visually appealing website that effectively presents the farm's offerings.
          </p>
          <Link href='https://novelle-farm.vercel.app/'>
            <button className='px-8 py-2 mt-5 mr-8 hover:scale-105 duration-300'>Demo</button>
          </Link>
          <Link href='https://github.com/julienLeMee'>
            <button className='px-8 py-2 mt-5 hover:scale-105 duration-300'>Code</button>
          </Link>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 h-auto'>
          <div className="p-2">
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1' >
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='mr-2'/> Next.js</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='mr-2'/> Tailwind</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='mr-2'/> Weather API</p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='flex items-center underline cursor-pointer mt-8 text-[#5651e5]'><AiOutlineArrowLeft className='mr-2' />Back</p>
        </Link>
      </div>
    </div>
  )
}

export default ferme
