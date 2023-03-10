import React, { } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import Loader from '@/components/Loader'
import { ICardPage } from '@/types/types'

const CardPage: React.FC = () => {

  const router = useRouter();





  const route = useRouter()

  const [isLoading, setIsLoading] = React.useState<Boolean>(true)

  const [item, setItem] = React.useState<ICardPage>({
    Poster: '',
    Director: '',
    Actors: '',
    Plot: '',
    imdbRating: '',
    imdbVotes: '',
    Type: '',
    Title: '',
    Year: '',
  })

  const getMovie = async () => {
    const { data } = await axios.get(`http://www.omdbapi.com/?apikey=c83e38af&i=${route.query.imdbID}`)
    setItem(data)
    setIsLoading(false)
  }

  React.useEffect(() => {
    getMovie()
  }, [])


  return (

    isLoading ? <Loader /> :
      <>
        <div onClick={() => router.push('/')} className='mt-5 text-center font-bold transition-all hover:opacity-50 cursor-pointer'>
          ← Move Back
        </div>
        <div className='card__page relative m-auto max-w-[700px] mt-[100px] my-5 flex gap-10  justify-center items-start'>
          <div>
            <img src={item.Poster} alt="poster pic" />
          </div>
          <div className='card__page-right flex flex-col items-start gap-2 w-1/3'>
            <div className='flex gap-2'> <h2 className='text-left font-bold'>{item.Title}</h2> <span className='font-bold'>({item.Year})</span></div >
            <ul className='flex flex-col gap-2'>
              <li><b>Director:</b> {item.Director}</li>
              <li><b>Actors:</b> {item.Actors}</li>
              <li><b>Plot:</b> {item.Plot}</li>
            </ul>
            <div className='flex flex-col gap-5 mt-5'>
              <div><b>IMDB Ranking</b>: {item.imdbRating}</div>
              <div><b>Votes</b>: {item.imdbVotes}</div>
            </div>
          </div>
          <div className='card__page-abs absolute -left-5 bottom-1/4'>
            {item.Type === 'movie' ? '' : <div className="p-2 border-gray-500 border-2 rounded-md bg-white">This isn't a movie so why it's here?</div >}
          </div>
        </div>
      </>
  )
}

export default CardPage