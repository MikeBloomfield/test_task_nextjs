import { ICard } from '@/types/types'
import Link from 'next/link'
import { AiFillHeart } from 'react-icons/ai'
import { ImCancelCircle } from 'react-icons/im'
import { useDispatch } from 'react-redux'
import { setFavourites, removeFavourite } from '@/redux/favouriteSlice'
import { useState } from 'react'
const Card: React.FC<ICard> = ({ title, poster, year, imdbID, hasIcon }) => {

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
        }, 1000)
    }
    return (
        <div className=' w-full rounded-md cursor-pointer transition-all hover:-translate-y-3 hover:scale-105  relative'>
            <Link href={`/CardPage/${imdbID}`}>
                <div className=' rounded-t-md bg-gray-500 min-h-[70%] flex flex-col justify-center'>
                    <div className='max-w-1/3'>
                        <img placeholder='blur' className=' object-cover w-full' src={poster !== 'N/A' ? poster : 'https://www.prokerala.com/movies/assets/img/no-poster-available.webp'} alt="movie pic" />
                    </div>
                </div>
            </Link>
            <div className=' bg-black text-white rounded-md flex gap-1 justify-center flex-col items-center py-6'><h2 className='text-center text-2xl'>{title}</h2><span className='text-2xl'>({year})</span></div >
            {hasIcon ? <div onClick={addToFavourite} className='card__icon absolute top-3 right-3 p-2 bg-white rounded-md group  transition-all'>
                <AiFillHeart size={24} className='card__icon-inner text-red-400  group-hover:scale-125 transition-all ' />
                {visible && <div>Saved to favourites</div>}
            </div> : <div onClick={removeFromFavourite} className='card__icon absolute top-3 right-3 p-2 bg-white rounded-md group  transition-all'>
                <ImCancelCircle size={24} className='card__icon-inner text-red-700  group-hover:scale-125 transition-all ' />
            </div>}
        </div >
    )
}

export default Card