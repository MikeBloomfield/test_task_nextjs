import { ICard } from '@/types/types'
import Link from 'next/link'
import { AiFillHeart } from 'react-icons/ai'
import { ImCancelCircle } from 'react-icons/im'
import { useDispatch } from 'react-redux'
import { setFavourites, removeFavourite } from '@/redux/favouriteSlice'
import { useState } from 'react'
import { NextPage } from 'next'


const Card: NextPage<ICard> = ({ title, poster, year, imdbID, hasIcon }) => {

    const dispatch = useDispatch()

    const [visible, setVisible] = useState<Boolean>(false)

    const removeFromFavourite = () => {
        dispatch(removeFavourite({
            title,
            poster,
            year,
            imdbID,
            hasIcon
        }))
    }
    const addToFavourite = () => {
        dispatch(setFavourites({
            title,
            poster,
            year,
            imdbID,
            hasIcon
        }))
        setVisible(true)
        setTimeout(() => {
            setVisible(false)
        }, 750)
    }
    return (
        <div className='bg-black flex flex-col justify-between w-full h-full rounded-md  transition-all hover:-translate-y-3 hover:scale-105  relative'>
            <Link className='cursor-pointer flex-grow flex justify-center items-center' href={`/CardPage/${imdbID}`}>
                <div className='w-full rounded-t-md  h-auto flex flex-col justify-center'>
                    <div >
                        <img placeholder='blur' className=' object-cover w-full' src={poster !== 'N/A' ? poster : 'https://www.prokerala.com/movies/assets/img/no-poster-available.webp'} alt="movie pic" />
                    </div>
                </div>
            </Link>
            <div className=' bg-black text-white rounded-md flex gap-1 justify-center flex-col items-center py-6'><h2 className='card-title px-2 text-center text-2xl mb-2'>{title}</h2><span className='card-desc text-2xl text-yellow-400'>({year})</span></div >
            {hasIcon ? <div onClick={addToFavourite} className='cursor-pointer card__icon absolute top-3 right-3 p-2 bg-white rounded-md group  transition-all'>
                <AiFillHeart size={24} className='card__icon-inner text-red-400  group-hover:scale-125 transition-all ' />
                {visible && <div className='absolute -left-20 top-0 bg-white rounded-md p-2 '>Saved!</div>}
            </div> : <div onClick={removeFromFavourite} className='cursor-pointer card__icon absolute top-3 right-3 p-2 bg-white rounded-md group  transition-all'>
                <ImCancelCircle size={24} className='card__icon-inner text-red-700  group-hover:scale-125 transition-all ' />
            </div>}
        </div >
    )
}

export default Card