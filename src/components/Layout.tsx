import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { IChildren } from '@/types/types'


const Layout: React.FC<IChildren> = ({ children }) => {
    return (
        <div className="flex flex-col justify-between w-screen h-screen ">
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout