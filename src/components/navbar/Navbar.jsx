import React from 'react'

export default function Navbar() {
  const navbarLinks = [
    {id:1, name:'Home', link:'#home'},
    {id:2, name:'Skills', link:'#skills'},
    {id:3, name:'Experience', link:'#experience'},
    {id:4, name:'My Projects', link:'#projects'},
    {id:5, name:'Contact', link:'#contact'},
  ]
  return (
    <header data-aos="fade-up" className="absolute top-0 flex justify-center items-center body-font z-20">
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-center'>
        <a className='flex title-font font medium text-gray-900 mb-4 md:mb-0'>
          <span className='ml-3 mr-11 font-bold text-white text-3xl'>Portfolio</span>
        </a>
        <nav className='md:ml-auto md:mr-auto font-medium flex flex-wrap items-center text-base text-gray-300 justify-center'>
          {
            navbarLinks.map((e)=>(
              <a key={e.id} href={e.link} className='mr-7 hover:bg-white hover:text-black transition-all p-3 rounded-lg' >
                {e.name}
              </a>
            ))
          }
        </nav>
        <button type='button' className='text-gray-950 mt-4 bg-white hover:bg-blue-300 cursor-pointer font-semibold rounded-lg text-sm px-5 py-2.5 text-center transition-all'>
          Contact
        </button>
      </div>
    </header>
  )
}
