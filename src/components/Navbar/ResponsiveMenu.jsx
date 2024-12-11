import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { NavbarLinks } from './Navbar'
import { data } from 'autoprefixer'
 
const navbarLinks = [
  {
    name: "Trang chủ",
    link: "/",
  },
  {
    name: "Giới thiệu",
    link: "/about",
  },
  {
    name: "Bài viết.",
    link: "/blogs",
  },
  {
    name: "Địa điểm nổi bật",
    link: "/places",
  },
]
const ResponsiveMenu = ({showMenu,setShowMenu}) => {
  return (
  <div 
    className={'${ showMenu ? "left-0" : "-left-[-100%]"} fixed bottom-0 right-0 z-20 h-screen w-[75%] flex-col justify-between bg-white dark:text-white px-8 pb-6 pt-16  text-black transition-all duration-200 md:hidden roundded-r-xl shadow-md'} 
    > 
    <div className="Navbar__card">
      { /*Đầu*/ }
      <div> 
        <div className='flex items-center justify-start gap-4'>
        <FaUserCircle size={50} 
        className="text-gray-500" /> 
        <div className='text-gray-500'>
          <h1>Xin chào khách hàng!</h1>
          <h1 className='text-sm' text-slate-500>Các dịch vụ.</h1>
        </div>
        </div>
      </div>
      { /* Giữa */ }
      <div className='text-black mt-12'>
        <ul className='space-y-4 text-xl'>
          {
            navbarLinks.map(({ name, link}) => (
              <li >
                <Link 
                to={link}
                onClick={() => setShowMenu(!showMenu)}
                className='mb-5 inline-block'
                >
                  {name}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  </div>
  )
}

export default ResponsiveMenu
