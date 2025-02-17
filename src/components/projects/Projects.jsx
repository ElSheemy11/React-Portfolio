import React from 'react'
import eCommerce from '../../assets/e-Commerce.png'
import GuessNum from '../../assets/GuessMyNumberGame.png'
import logReg from '../../assets/logReg.png'
// ﻷجل كل لما أعوز أضيف بروجيكت جديد
// In case of that I want to add a new project

const ProjectCard = ({image, title})=>(
    <div className='p-4 md:w-1/3 mb-6'>
        <div className='rounded-lg h-52 overflow-hidden hover:scale-110 transition-all'>
            <img src={image} alt="content" className='object-cover object-center h-full w-full' />
        </div>
        <h2 className='text-xl font-medium title-font text-white mt-5'>{title}</h2>
        <a className='text-blue-300 hover:text-blue-100 transition-all inline-flex items-center mt-3 cursor-pointer'>Fullscreen
            <svg fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' className='w-4 h-4 ml-2' viewBox='0 0 24 24'>
                <path d='MS 12H14M12 517 7-7 7'></path>
            </svg>
        </a>
    </div>
)

export default function Projects() {
    const projects = [
        {title: "e-Commerce Website", image: eCommerce },
        {title: "Guess-My-Number Game", image: GuessNum },
        {title: "Full-stack Login/Register Page", image: logReg },
    ]
  return (
    <section id='projects' className='text-gray-400 bg-blue-950 body-font'>
        <div className='container px-3 py-11 mx-auto'>
            <div data-aos="fade-up" data-aos-delay="300" className='flex flex-col'>
                <div className='flex flex-wrap sm:flex-row flex-col py-6 mb-12'>
                    <h1 className='sm:w-2/5 text-white font-medium title-font text-3xl mb-2 sm:mb-0'>My projects</h1>
                    <p className='sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore illum nemo quaerat consequatur sint ullam dignissimos, ipsa corporis deserunt facilis mollitia officiis porro a accusamus quasi ducimus placeat culpa expedita!
                    </p>
                    <button type='button' data-aos="fade-up" data-aos-delay="300" className='cursor-pointer transition-all text-gray-900 bg-white hover:bg-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-lg font-semibold text-xs sm:text-sm px-4 py-2 text-center'>
                        View all
                    </button>
                </div>
            </div>
            <div>
                <div data-aos="fade-up" data-aos-delay="400" className='flex flex-wrap sm:m-4 -mx-4 -mb-10 -mt-4'>
                    {
                        projects.map((project, index)=>(
                            <ProjectCard key={index} {...project} />
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}
