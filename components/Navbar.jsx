import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import navLogoImg from './../public/skills/navLogo.svg'
import React, { useEffect } from 'react'
import { useState } from 'react'

export default function Navbar() {
  const [nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY > 50) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    }
    window.addEventListener('scroll', handleShadow)
  }, [])

  return (
    <div className={ shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100'}>
      <div className='flex justify-between items-center w-full h-full px-16 2xl:px16'>
        <Link href='/'>
          <Image src={navLogoImg} width={125} height={50} alt='logo' />
        </Link>
        <div>
          <ul className='hidden md:flex'>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
            </Link>
            <Link href='/#about'>
              <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
            </Link>
            <Link href='/#skills'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
            </Link>
            <Link href='/#projects'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
            </Link>
            <Link href='/#contact'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
            </Link>
          </ul>
          <div onClick={handleNav} className='md:hidden'>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div className={ nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}> {/* Mobile Menu, 70% opacity */}
        <div className={ nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45$] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>

          <div>
            <div className='flex w-full items-center justify-between'>
              <Image src={navLogoImg} width={87} height={35} alt='logo' />
              <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                <AiOutlineClose size={25} />
              </div>
            </div>

            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:-[90%] py-4'>Let's build something interesting together</p>
            </div>
          </div>

          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li className='py-4 text-sm'>Home</li>
              </Link>
              <Link href='/'>
                <li className='py-4 text-sm'>About</li>
              </Link>
              <Link href='/'>
                <li className='py-4 text-sm'>Skills</li>
              </Link>
              <Link href='/'>
                <li className='py-4 text-sm'>Projects</li>
              </Link>
              <Link href='/'>
                <li className='py-4 pb-20 text-sm'>Contact</li>
              </Link>
            </ul>
            <div className='pt-30'>
              <p className='uppercase tracking-widest text-[#5651e5]'>Let's connect</p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaLinkedinIn />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaGithub />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <AiOutlineMail />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
