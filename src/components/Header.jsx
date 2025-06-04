import { Link } from 'react-router-dom'
import { useState } from 'react'


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className='bg-white sticky z-20  top-0 shadow-lg border-b border-gray-200'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>

          {/* Logo */}
          <div className='flex-shrink-0'>
            <h1 className='text-2xl font-bold text-gray-800 '>
              Interns
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex space-x-4'>
            <Link 
              to='/' 
              className='text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-blue-50 rounded-md border-b-2 border-transparent hover:border-blue-500'
            >
              Home
            </Link>
            <Link 
              to='/internships' 
              className='text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-blue-50 rounded-md border-b-2 border-transparent hover:border-blue-500'
            >
              Internships
            </Link>
            <Link 
              to='/about' 
              className='text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-blue-50 rounded-md border-b-2 border-transparent hover:border-blue-500'
            >
              About
            </Link>
            <Link 
              to='/contact' 
              className='text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-blue-50 rounded-md border-b-2 border-transparent hover:border-blue-500'
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              onClick={toggleMenu}
              className='text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 transition-colors duration-200 p-2'
              aria-label='Toggle menu'
            >
              <svg 
                className={`h-6 w-6 transform transition-transform duration-200 ${isMenuOpen ? 'rotate-90' : ''}`} 
                fill='none' 
                viewBox='0 0 24 24' 
                stroke='currentColor'
              >
                {isMenuOpen ? (
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                ) : (
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`transition-all duration-300 ease-in-out ${
          isMenuOpen ? 
             ( 'max-h-70 opacity-100 pb-4' )
            : ('max-h-0 opacity-0 overflow-hidden')
        }`}>
          <nav className='px-2 pt-2 pb-3 space-y-1 bg-gray-50 rounded-lg mt-2'>
            <Link 
              to='/' 
              onClick={closeMenu}
              className='text-gray-700 hover:text-blue-600 hover:bg-blue-50 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 border-l-4 border-transparent hover:border-blue-500'
            >
              Home
            </Link>
            <Link 
              to='/internships' 
              onClick={closeMenu}
              className='text-gray-700 hover:text-blue-600 hover:bg-blue-50 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 border-l-4 border-transparent hover:border-blue-500'
            >
              Internships
            </Link>
            <Link 
              to='/about' 
              onClick={closeMenu}
              className='text-gray-700 hover:text-blue-600 hover:bg-blue-50 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 border-l-4 border-transparent hover:border-blue-500'
            >
              About
            </Link>
            <Link 
              to='/contact' 
              onClick={closeMenu}
              className='text-gray-700 hover:text-blue-600 hover:bg-blue-50 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 border-l-4 border-transparent hover:border-blue-500'
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header