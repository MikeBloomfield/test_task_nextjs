import React from 'react'

const Footer: React.FC = () => {
    return (
        <footer className='flex justify-center align-center p-10 gap-1 bg-black'>
            <span className='text-white'>Test App Created By </span><a className="text-blue-500 hover:text-blue-800 transition-all" target="_blank" href="https://www.linkedin.com/in/stanislav-huseinov-b1b364203/">Me</a>
        </footer>
    )
}

export default Footer