import logo from '../../assets/images/logo.svg'
import { Link, NavLink } from 'react-router-dom'
import { IoHeartOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { VscTriangleDown } from "react-icons/vsc";
import { RiMenu2Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { useState } from 'react';
import './Header.scss';


const Header = () => {

  const [active, setActive] = useState(false);


  const handleToggleMenu = () => {
    setActive(!active);
  }

  return (
    <>
      {/* <div className="header_container">
        <div className="container mx-auto">
          <header className='flex items-center justify-between px-3 lg:px-0 py-4 w-full'>
            <div className="left flex items-center gap-3">
              <RiMenu2Fill className='lg:hidden w-6 h-6' onClick={handleToggleMenu}/>
              <Link to={'/'}><img src={logo} alt="" className='w-36 lg:w-52'/></Link>
            </div>
            <div className={`middle fixed lg:relative z-10 lg:z-0 bg-[#2196f3] lg:bg-white top-0 left-0 lg:left-auto lg:top-auto flex items-center justify-start lg:justify-center w-4/6 lg:w-fit lg:h-fit h-full translate-x-[-100%] lg:translate-x-0 transition-transform duration-300 ease-in-out ${active? 'translate-x-[0]' : ''}`}>
                <ul className='flex items-start lg:items-center justify-start lg:justify-center  gap-6 flex-col lg:flex-row h-full lg:w-fit w-4/6 p-12 lg:p-0'>
                  <li><NavLink className='text-white lg:text-black' to={'/'}>Home</NavLink></li>
                  <li><NavLink className='text-white lg:text-black' to={'/about'}>About</NavLink></li>
                  <li><NavLink className='text-white lg:text-black'>Brand</NavLink></li>
                  <li><NavLink className='text-white lg:text-black flex items-center gap-1'>Offers <VscTriangleDown/></NavLink></li>
                  <li><NavLink className='text-white lg:text-black whitespace-nowrap'>All Vendors</NavLink></li>
                </ul>
                <RxCross2 className='lg:hidden absolute top-6 right-6 w-6 h-6 text-white' onClick={handleToggleMenu}/> 
            </div>
            <div className="right flex items-center gap-4">
              <Link to={'/wishlist'} className='bg-zinc-200 p-2 rounded-full relative'>
                <IoHeartOutline className='text-[#2196f3] w-4 h-4 lg:w-6 lg:h-6'/>
              </Link>
              <Link to={'/wishlist'} className='bg-zinc-200 p-2 rounded-full relative'>
                <FaUser className='w-4 h-4 lg:w-6 lg:h-6 text-[#2196f3]'/>
              </Link>
              <Link to={'/cart'} className='bg-zinc-200 p-2 rounded-full relative'>
                <FiShoppingCart className='w-4 h-4 lg:w-6 lg:h-6 text-[#2196f3]'/>
                <div className="count absolute bg-[#ffc107] h-[20px] w-[20px] flex items-center justify-center rounded-full text-sm top-[-5px] right-[-5px]">0</div>
              </Link>
            </div>
          </header>
        </div>
      </div> */}
      <div className="header_container">
        <header className='max-w-[1600px] mx-auto'>
          <div className="left">
            <RiMenu2Fill onClick={handleToggleMenu}/>
            <Link to='/'><img src={logo} alt="logo" /></Link>
          </div>
          <div className={`middle ${active ? 'active' : ''}`}>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/brand">Brand</NavLink></li>
              <li><NavLink to="/offers">Offers <VscTriangleDown /></NavLink></li>
              <li><NavLink to="/all-vendors">All Vendors</NavLink></li>
            </ul>
            <RxCross2 className='cross' onClick={handleToggleMenu}/>
          </div>
          <div className="right">
            <Link to='/wishlist'>
              <IoHeartOutline />
            </Link>
            <Link>
              <FaUser />
            </Link>
            <Link to={'/cart'}>
              <div className="count">0</div>
              <FiShoppingCart />
            </Link>
          </div>
        </header>
      </div>
    </>
  )
}

export default Header