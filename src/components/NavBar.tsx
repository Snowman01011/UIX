import { Link } from 'react-router-dom'

function Navbar(){
    return(
        <nav
            className='text-gray-800 h-12 w-100% flex place-content-evenly items-center p-8 m-4 rounded-3xl font-semibold'
        >

            
            <div
                className='w-120 font-sans hidden md:flex justify-evenly'
            >
                <Link
                    to='/'
                    className='hover:text-blue-400 ease-linear duration-200'
                >
                    Home
                </Link>

                <Link
                    to='/Courses'
                    className='hover:text-blue-400 ease-linear duration-200'
                >
                    Courses
                </Link>

                <Link
                    to='/About'
                    className='hover:text-blue-400 ease-linear duration-200'
                >
                    About
                </Link>

                <Link
                    to='/Contact'
                    className='hover:text-blue-400 ease-linear duration-200'
                >
                    Contact
                </Link>
            </div>


        </nav>
    )
}

export default Navbar;