import Link from 'next/link'
import React from 'react'
import MyInput from './MyInput'
import { useRouter } from 'next/router'



const Header: React.FC = () => {

    const router = useRouter()

    return (
        <header className='header flex justify-between px-5 bg-black items-center'>
            <nav className='flex gap-5 p-5'>
                <Link className={router.pathname === '/' ? 'text-white hover:opacity-50 transition-all cursor-pointer underline' : 'text-white hover:opacity-50 transition-all cursor-pointer'} href='/'>Movie Search</Link>
                <Link className={router.pathname === '/favourites' ? 'text-white hover:opacity-50 transition-all cursor-pointer underline' : 'text-white hover:opacity-50 transition-all cursor-pointer'} href='/favourites'>My Favourites</Link>
            </nav>
            {router.asPath !== '/favourites' && <MyInput placeholder='type the movie title here' />}
        </header>
    )
}

export default Header