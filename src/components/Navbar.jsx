import React from 'react'

const Navbar = () => {
  return (
    <article className='flex text-primary3 font-bold p-2'>
       <section className='flex gap-2 w-full justify-between p-2'>
        <h3 className='hover:scale-110 cursor-pointer'>Home</h3>
        <h3 className='hover:scale-110 cursor-pointer'>About me</h3>      
        <h3 className='hover:scale-110 cursor-pointer'>Projects</h3>
        <h3 className='hover:scale-110 cursor-pointer'>Skills</h3>
        <h3 className='hover:scale-110 cursor-pointer'>Contact</h3>
        </section>
    </article>
  )
}

export default Navbar