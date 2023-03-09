import React from 'react'


const Loader: React.FC = () => {
  return (
    <div className='relative flex m-auto mt-[200px] justify-center h-[200px]  items-center w-[200px] '>
      <div className='absolute top-50 left-50 h-[200px] border-2 rounded-full border-black border-dashed w-[200px] animate-spin' >
      </div>
      <span>Loading...</span>
    </div>
  )
}

export default Loader