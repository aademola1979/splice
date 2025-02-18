import Link from 'next/link'


const Nav = () => {
    const items = [
      {
        text:"Home",
        link:"/"
      },
      {
        text:"About",
        link:"/about"
      },
      {
        text:"Contact",
        link:"/contact"
      },
      {
        text:"How it Works",
        link:"/how_it_works"
      },
      
    ]
  return (
    <nav className='hidden md:flex h-fit self-end gap-6 font-medium capitalize text-myblue ml-[10rem]'>
      {
        items.map(({text, link}, i)=>(
          <Link key={i} href={link} className='border-b text-nowrap border-transparent hover:border-orange-500'>{text}</Link>

        ))
      }
        
       
    </nav>
  )
}

export default Nav