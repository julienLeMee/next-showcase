import React from 'react'
import ProjectItem from './ProjectItem'
import portfolioImg from './../public/projects/portfolio.png'
import meetballImg from './../public/projects/meetball.png'
import starWarsImg from './../public/projects/starwars.png'
import watchlistImg from './../public/projects/watchlist.png'
import fermeImg from './../public/projects/ferme.jpg'
import houseImg from './../public/projects/house.png'
// import formImg from './../public/projects/form.png'
// import threejsTextImg from './../public/projects/threejs-text.png'

const Projects = () => {
  return (
    <div id='projects' className='w-full p-16 lg:p-32'>
      <div className='max-w-[1240px] mx-auto'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
        <h2 className='py-4'>What I've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>

          <ProjectItem
            title='Portfolio'
            backgroundImg={portfolioImg}
            projectUrl='/portfolio'
            skills='HTML | CSS | JS | Three.js'
          />
          <ProjectItem
            title='Meetball'
            backgroundImg={meetballImg}
            projectUrl='/meetball'
            skills='Ruby on Rails | JS | SQL'
          />
          <ProjectItem
            title='Star Wars'
            backgroundImg={starWarsImg}
            projectUrl='/star-wars'
            skills='Three.js'
          />
          <ProjectItem
            title='La Ferme De Novelle'
            backgroundImg='https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
            projectUrl='/la-ferme-de-novelle'
            skills='Next.js | Tailwind | Weather API'
          />
          <ProjectItem
            title='Watchlist'
            backgroundImg={watchlistImg}
            projectUrl='/watchlist'
            skills='Ruby on Rails | Bootstrap'
          />
          <ProjectItem
            title='Haunted House'
            backgroundImg={houseImg}
            projectUrl='/haunted-house'
            skills='Three.js'
          />
          {/* <ProjectItem
            title='Form Validation'
            backgroundImg={formImg}
            projectUrl='/form-validation'
            skills='HTML | CSS | JS'
          />
          <ProjectItem
            title='3D Text'
            backgroundImg={threejsTextImg}
            projectUrl='/3d-text'
            skills='Three.js'
          /> */}

        </div>
      </div>
    </div>
  )
}

export default Projects
