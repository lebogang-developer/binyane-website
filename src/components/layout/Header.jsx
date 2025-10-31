import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../assets/binyane-logo.jpg';

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className='bg-white shadow-sm'>
      <div className='container mx-auto flex items-center justify-between p-4'>
        <Link to='/' className='flex items-center gap-3'>
          <img
            src={logo}
            alt='Binyane logo'
            className='h-12 w-12 object-contain'
          />
          <div>
            <h1 className='font-bold text-lg text-blue-600'>
              Binyane Private Tutoring
            </h1>
            <p className='text-sm text-gray-500'>
              After-school programs — Primary & Secondary
            </p>
          </div>
        </Link>
        {/* Socials */}
        <div className='flex gap-3'>
          <a href='#' className='text-blue-600 hover:underline'>
            Facebook
          </a>
          <a href='#' className='text-blue-600 hover:underline'>
            Instagram
          </a>
        </div>
        <nav className='hidden md:flex gap-6 items-center text-sm'>
          <Link to='/'>Home</Link>
          <Link to='/programs'>Programs</Link>
          <Link to='/register' className='text-indigo-600 font-semibold'>
            Register
          </Link>
          <Link to='/contact'>Contact</Link>
        </nav>

        <button
          className='md:hidden'
          onClick={() => setOpen((v) => !v)}
          aria-label='Menu'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>
      {open && (
        <div className='md:hidden bg-white border-t'>
          <div className='flex flex-col p-4 gap-3'>
            <Link to='/' onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link to='/programs' onClick={() => setOpen(false)}>
              Programs
            </Link>
            <Link to='/register' onClick={() => setOpen(false)}>
              Register
            </Link>
            <Link to='/contact' onClick={() => setOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
export default Header;
