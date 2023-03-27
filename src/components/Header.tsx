import Link from 'next/link'
import React from 'react'
import MyInput from './MyInput'
import { useRouter } from 'next/router'
import { NextPage } from 'next'
import Image from 'next/image'



const Header: NextPage = () => {

    const router = useRouter()

    return (
        <header className='tablet:flex-col tablet:pb-[20px] flex justify-between px-5 bg-black items-center'>
            <nav className='flex gap-5 p-5'>
                <Link className={router.pathname === '/' ? 'text-white hover:opacity-50 transition-all cursor-pointer underline' : 'text-white hover:opacity-50 transition-all cursor-pointer'} href='/'>Movie Search</Link>
                <Link className={router.pathname === '/favourites' ? 'text-white hover:opacity-50 transition-all cursor-pointer underline' : 'text-white hover:opacity-50 transition-all cursor-pointer'} href='/favourites'>My Favourites</Link>
            </nav>
            <div className='flex justify-center items-center gap-2'> <Image width={32} alt="tape icon" src={'/favicon-32x32.png'} height={32} className={'rounded-md'} ></Image> <span className='text-white '>Movies Search</span></div>
            {router.asPath !== '/favourites' && <MyInput  placeholder=' type the movie title here' />}
        </header>
    )
}

export default Header