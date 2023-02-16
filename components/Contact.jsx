/* eslint-disable react/no-unescaped-entities */
import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='w-full h-screen  flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline  text-[#3a81cd]'>Contact</p>
                
            </div>
            <input className='border-2 border-gray-300 px-4 py-2 rounded-full' type="text" placeholder='Name' name='name' />
            <input className='border-2 border-gray-300 px-4 py-2 rounded-full my-4' type="email" placeholder='Email' name='email' />
            <textarea className='border-2 border-gray-300 rounded-lg px-4 py-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className="transition duration-300 ease-in-out w-full p-4 text-gray-100 mt-4 bg-[#3a81cd] hover:bg-cyan-600">SEND</button>
        </form>
    </div>
  )
}

export default Contact