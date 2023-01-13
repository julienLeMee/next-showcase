import Image from 'next/image'
import React from 'react'
import fermeImg from '../public/projects/ferme.jpg'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const ferme = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
          <Image className='absolute z-1' layout='fill' objectFit='cover' src={fermeImg} alt='portfolio' />
          <div className='absolute top-[70%]  max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-16'>
            <h2 className='py-2'>La Ferme De Novelle</h2>
            <h3>HTML | CSS | Bootstrap | Javascript</h3>
          </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-16 grid md:grid-cols-5 gap 8 pt-8'>
        <div className='col-span-4'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>Project</p>
          <h2 className='py-6'>Overview</h2>
          <p className='pr-16'>
            Meet-Ball is a mobile (web) application dedicated to Montreal basketball players. It allows them to find playgrounds, players and join games near them. <br />
            Meet-Ball comes with a ranking system that allows users of the application to play against players of their level when the game mode is "competitive".
          </p>
          <button className='px-8 py-2 mt-5 mr-8'>Demo</button>
          <button className='px-8 py-2 mt-5'>Code</button>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 h-auto'>
          <div className="p-2">
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1' >
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='mr-2'/> HTML</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='mr-2'/> CSS</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='mr-2'/> Bootstrap</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='mr-2'/> Javascript</p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer mt-8'>Back</p>
        </Link>
      </div>
    </div>
  )
}

export default ferme
