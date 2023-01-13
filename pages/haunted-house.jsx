import Image from 'next/image'
import React from 'react'
import houseImg from '../public/projects/house.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import Link from 'next/link'

const house = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
          <Image className='absolute z-1' layout='fill' objectFit='cover' src={houseImg} alt='portfolio' />
          <div className='absolute top-[70%]  max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-16'>
            <h2 className='py-2'>Haunted House</h2>
            <h3>Three JS</h3>
          </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-16 grid md:grid-cols-5 gap 8 pt-8'>
        <div className='col-span-4'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>Project</p>
          <h2 className='py-6'>Overview</h2>
          <p className='pr-16'>
            My project, 'Haunted House', is a dynamic and interactive experience coded using Three JS. I had to create custom geometries to accurately build the haunted house, as well as incorporate detailed textures, shadows, and lighting effects to bring the scene to life. <br />
            The end result is a stunning and immersive experience that immerses the viewer in a spooky and eerie atmosphere, perfect for Halloween season
          </p>
          <button className='px-8 py-2 mt-5 mr-8'>Demo</button>
          <button className='px-8 py-2 mt-5'>Code</button>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 h-auto'>
          <div className="p-2">
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1' >
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='mr-2'/> Three JS</p>
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

export default house
