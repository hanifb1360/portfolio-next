import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectItem = ({title, backgroundImg, tech, projectUrl}) => {
  return (
    <div id='projectItem' className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-t from-[#1e81b0] to-[#0b2e66]'>
    <Image className='rounded-xl p-4 group-hover:opacity-10 group-hover:ease-in-out duration-300' src={backgroundImg} alt='/' /> 
    
    <section className='hidden group-hover:block group-hover:ease-in duration-300 absolute top-[50%] ease-in left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
        <p className='pb-4 pt-2 text-white text-center'>{tech}</p>
        <Link href={projectUrl}>
            <p className='hover:scale-105 hover:ease-in duration-300 text-center py-3 px-10 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
        </Link>
    </section>
 </div>
  )
}

export default ProjectItem