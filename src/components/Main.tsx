import React from 'react'
import Card from './Card'
import { AppDispatch, RootState } from '@/redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '@/redux/inputSlice'
import { NextPage } from 'next'

const Main: NextPage = () => {

    const dispatch = useDispatch<AppDispatch>()

    const inputValue = useSelector((state: RootState) => state.inputSlice.fetchValue)
    const titleValue = useSelector((state: RootState) => state.inputSlice.title)
    const items = useSelector((state: RootState) => state.inputSlice.items)


    const getMovies = () => {
        dispatch(fetchMovies(inputValue))
    }

    React.useEffect(() => {
        getMovies()
    }, [inputValue])


    return (
        <main >
            <div className='text-center my-5 font-bold'>{titleValue}</div>
            {items ? <div className=" wrapper justify-items-center grid-cols-4  small:grid-cols-1 fablet:grid-cols-2 tablet:grid-cols-3  auto-rows-max grid gap-5 mb-10  px-10">
                {items.map((obj: any): React.ReactNode => (
                    <Card title={obj.Title} poster={obj.Poster} year={obj.Year} key={obj.imdbID} imdbID={obj.imdbID} hasIcon={true} />
                ))}
            </div> : <div></div>}
        </main>
    )
}

export default Main