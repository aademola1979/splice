import Link from 'next/link'


const Nav = () => {
  const items = [


    {
      text: 'Home',
      link: '/',
      icon: '',
      show: ''
    },
    {
      text: 'About',
      link: '/about',
      icon: '',
      show: ''
    },

    {
      text: 'Contact',
      link: '/contact',
      icon: '',
      show: "",
    },

  ]
  return (
    <nav className='w-max hidden z-50 py-3 px-4 md:px-8 fixed top-6 right-1/2 translate-x-1/2 border-2 border-solid border-white/100 rounded-full md:flex items-center gap-2 md:gap-4 font-normal md:font-medium capitalize bg-transparent backdrop-blur-xl'>
      {
        items.map((item, i)=>(
          <Link key={i} href={item.link} className='border-b border-transparent hover:border-orange-500'>{item.text}</Link>
        ))
      }
    </nav>
  )
}

export default Nav