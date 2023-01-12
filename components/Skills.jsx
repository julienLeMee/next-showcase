import Image from 'next/image'
import htmlImg from './../public/skills/html-logo.png'
import cssImg from './../public/skills/css-logo.png'
import javascriptImg from './../public/skills/javascript-logo.png'
import reactImg from './../public/skills/react-logo.png'
import nextjsImg from './../public/skills/next-js-logo.png'
import threejsImg from './../public/skills/three-js-logo.png'
import sassImg from './../public/skills/sass-logo.svg'
import tailwindImg from './../public/skills/tailwind-logo.png'
import gitImg from './../public/skills/git-logo.png'
import githubImg from './../public/skills/github-logo.png'
import finalCutProImg from './../public/skills/final-cut-pro-logo.png'
import rubyImg from './../public/skills/ruby-logo.png'
import railsImg from './../public/skills/rails-logo.png'
import sqlImg from './../public/skills/sql-logo.png'
import bootstrapImg from './../public/skills/bootstrap-logo.png'
import vercelImg from './../public/skills/vercel-logo.png'
import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-16 lg:p-32 mb-10 md:mt-10'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Skills
        </p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-8'>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={htmlImg} width={64} height={64} alt='logo' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={cssImg} width={64} height={64} alt='logo' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={javascriptImg} width={64} height={64} alt='logo' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JAVASCRIPT</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={threejsImg} width={64} height={64} alt='logo' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>THREE.JS</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={nextjsImg} width={64} height={64} alt='logo' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>NEXT.JS</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={rubyImg} width={64} height={64} alt='logo' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>RUBY</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={railsImg} width={64} height={64} alt='logo' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>RUBY ON RAILS</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={bootstrapImg} width={64} height={64} alt='logo' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>BOOTSTRAP</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={tailwindImg} width={64} height={64} alt='logo' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>TAILWIND</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={reactImg} width={64} height={64} alt='logo' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>REACT</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={vercelImg} width={64} height={64} alt='logo' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>VERCEL</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={sassImg} width={64} height={64} alt='logo' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>SASS</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={gitImg} width={64} height={64} alt='logo' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>GIT</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={githubImg} width={64} height={64} alt='logo' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>GITHUB</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={finalCutProImg} width={64} height={64} alt='logo' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>FINAL CUT PRO</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={sqlImg} width={64} height={64} alt='logo' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>SQL</h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Skills
