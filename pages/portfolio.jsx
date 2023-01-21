import Image from 'next/image'
import React from 'react'
import portfolioImg from '../public/projects/portfolio.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import Link from 'next/link'

const portfolio = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
          <Image className='absolute z-1' layout='fill' objectFit='cover' src={portfolioImg} alt='portfolio' />
          <div className='absolute top-[70%]  max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-16'>
            <h2 className='py-2'>Portfolio</h2>
            <h3>Three JS | HTML | CSS | JS</h3>
          </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-16 grid md:grid-cols-5 gap 8 pt-8'>
        <div className='col-span-4'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>Project</p>
          <h2 className='py-6'>Overview</h2>
          <p className='pr-16'>
            My portfolio is built using a combination of HTML, CSS, Sass, JavaScript, and Three.js. These technologies allow me to create a visually appealing and interactive website that showcases my projects and skills. HTML provides the structure for the website, while CSS and Sass are used for styling and layout. JavaScript and Three.js are used to add dynamic and interactive elements to the website, such as animations and 3D graphics. <br />
            With the help of these technologies, my portfolio is built to be an efficient and effective way to showcase my skills and projects to potential clients and employers.
          </p>
          <Link href='http://www.julienlemee.com'>
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
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='mr-2'/> HTML</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='mr-2'/> CSS</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='mr-2'/> SCSS</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='mr-2'/> Javascript</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='mr-2'/> Bootstrap</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='mr-2'/> Three.js</p>
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

export default portfolio
