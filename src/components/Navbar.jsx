import React from 'react'

const Navbar = () => {
  return (
    <article className='flex text-primary3 font-bold p-2 max-w-[1024px] mx-auto'>
       <section className='flex gap-2 w-full justify-between p-2'>
        
        <a href='#Home' className='hover:scale-110 cursor-pointer'>Home</a>
        <a href='#AboutMe' className='hover:scale-110 cursor-pointer'>About me</a>      
        <a href='#Projects' className='hover:scale-110 cursor-pointer'>Projects</a>
        <a href='#Skills' className='hover:scale-110 cursor-pointer'>Skills</a>
        <a href='#Contact' className='hover:scale-110 cursor-pointer min-[400px]:mr-4'>Contact</a>
        </section>
    </article>
  )
}

export default Navbar