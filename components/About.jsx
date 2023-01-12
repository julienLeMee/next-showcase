import React from 'react'

const About = () => {
  return (
    <div className='w-full md:h-screen p-16 lg:p-32 flex items-center py-16 mb-32 md:mb-20'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
          <h2 className='py-4'>Who I am</h2>
          <p className='py-2 text-gray-600'>// I'm not your normal developer</p>
          <p className='py-2 text-gray-600'>My experiences have made me meticulous, self-reliant, able to manage unexpected issues while meeting deadlines and having a team spirit, skills that are essential for me to successfully complete projects.</p>
          <p className='py-2 text-gray-600'>I also have a strong background in building robust web applications using Ruby and Ruby on Rails. I have experience integrating interactive and engaging 3D elements into websites using Three.js. I am also well-versed in working with a team and using Agile methodologies, and I use Git and GitHub for version control.</p>
          <p className='py-2 text-gray-600 underline cursor-pointer'>Checkout some of my latest projects.</p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 duration-300'>
          <img src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2864&q=80" alt="" />
        </div>
      </div>
    </div>
  )
}

export default About
