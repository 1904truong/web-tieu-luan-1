import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import LogoImg from "../../assets/logo.png"
import { FaCaretDown } from 'react-icons/fa'
import { HiMenuAlt3, HiMenuAlt1 } from 'react-icons/hi';
import ResponsiveMenu from "./ResponsiveMenu"
export const NavbarLinks = [
    {
      name: "Trang chủ",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Bài viết",
      link: "/blogs",
    },
    {
      name: "Địa điểm nổi bật",
      link: "/best-places",
    },
  ];
  
  const DropdownLinks = [
    {
      name: "Các loại dịch vụ",
      link: "/#services",
    },
    {
      name: "Nổi bật",
      link: "/#mobile_brands",
    },
    {
      name: "Địa điểm",
      link: "/#location",
    },
  ];

const Navbar = ({ handleOrderPopup}) => {
    const [showMenu, setShowMenu] = useState(false);


    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };
  return (
    <>
      <div className='fixed top-0 right-0 w-full bg-white text-black shadow-md z-[99999]'>
        <div className='bg-gradient-to-r from-primary to-secondary text-white'>
            <div className="container py-[2px] sm:block hidden">
                <div className="flex justify-between">
                    <p>Chào màng khách hàng đã lựa chọn.</p>
                    <p>SĐT:0123456789 </p>
                </div>
            </div>
        </div>

        <div className="container py-3 sm:py-0">
            <div className='flex justify-between items-center'>
                {/* logo web */}
                <div>
                    <Link to="/" onClick={()=> window.scrollTo(0,0)}>
                        <img src={LogoImg} alt="" className='h-16' />
                    </Link>
                </div>

                {/* Phần đầu */}

                <div className='hidden md:block'>
                    <ul className='flex items-center gap-6'> 
                        <li className='py-4'>
                            <NavLink to="/" activeClassName="active" onClick={()=> window.scrollTo(0,0)}>Trang chủ</NavLink>
                        </li>

                        <li className='py-4'>
                            <NavLink to="/blogs" activeClassName="active" onClick={()=> window.scrollTo(0,0)}>Bài viết</NavLink>
                        </li>

                        <li className='py-4'>
                            <NavLink to="/places" activeClassName="active" onClick={()=> window.scrollTo(0,0)}>Địa điểm nổi bật</NavLink>
                        </li>

                        <li className='py-4'>
                            <NavLink to="/about" activeClassName="active" onClick={()=> window.scrollTo(0,0)}>Giới thiệu</NavLink>
                        </li>

                        {/* Chọn đối tượng */}
                        <li className='py-4 relative group cursor-pointer'>
                            <div className='dropdown flex items-center'>
                                <span>Các dịch vụ khác</span>
                                <span>
                                    <FaCaretDown className='transition-all duration-200 group-hover:rotate-180'/>
                                </span>
                            </div>
                            <div className="absolute -left-9 top-[57px] z-[9999] hidden group-hover:block shadow-md text-black w-[150px] bg-white p-2">
                                <ul>
                                   {DropdownLinks.map((data) => {
                                    return(
                                        <li key={data.name}>
                                            <a href={data.link} className='inline-block w-full rounded-md p-2 hover:bg-primary/20'>{data.name}</a>
                                        </li>
                                    )
                                   })}
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                {/* Nút đặt tour */}
                <div className="flex items-center gap-4">
                <button
                onClick={() => handleOrderPopup()} 

                className='bg-gradient-to-tr from-primary to-secondary
                hover:bg-bg-gradient-to-r hover:from-secondary hover:to-primary
                transition-all duration-600 text-white py-1 px-3 rounded-full'>
                  Đặt tour.
                  </button>
                  {/* Nút đặt xuất hiện */}
                  <div className="md:hidden block">
                     {showMenu ? (
                       <HiMenuAlt1
                       onClick={toggleMenu}
                       className=" cursor-pointer transition-all"
                       size={30}
                       />

                     ) : (
                      <HiMenuAlt3
                      onClick={toggleMenu}
                      className=" cursor-pointer transition-all"
                      size={30}
                      />
                     )}              
                  </div>
                </div>
            </div>
        </div>
        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      </div>
    </>
  )
}

export default Navbar
