import React from 'react'
import Card from './Card'
import { AppDispatch, RootState } from '@/redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '@/redux/inputSlice'
const Main: React.FC = () => {

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
            <div className='text-center mt-5 font-bold'>{titleValue}</div>
            {items ? <div className="wrapper justify-items-center grid-cols-3 auto-rows-max grid gap-5  px-10">
                {items.map((obj: any): React.ReactNode => (
                    <Card title={obj.Title} poster={obj.Poster} year={obj.Year} key={obj.imdbID} imdbID={obj.imdbID} hasIcon={true} />
                ))}
            </div> : <div></div>}
        </main>
    )
}

export default Main