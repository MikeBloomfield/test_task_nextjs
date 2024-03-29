import React from 'react'
import Card from './Card'
import { RootState } from '@/redux/store'
import { useSelector } from 'react-redux'
import { NextPage } from 'next'

const MainFavourites: NextPage = () => {

    const favourites = useSelector((state: RootState) => state.favouriteSlice.items)


    return (
        <main >
            {favourites.length ? <div className="wrapper my-5 justify-items-center  grid-cols-4 tablet:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 auto-rows-max grid gap-5  px-10">
                {favourites.map((obj, index: number): React.ReactNode => (
                    <Card hasIcon={false} title={obj.title} poster={obj.poster} year={obj.year} key={index} imdbID={obj.imdbID} />
                ))}
            </div> : <div className='text-center mt-10 text-black font-bold'>There is no favourite movies yet!</div>}
        </main>
    )
}

export default MainFavourites