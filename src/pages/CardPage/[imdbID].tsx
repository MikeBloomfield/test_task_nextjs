import React, { } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import Loader from '@/components/Loader'
import { ICardPage } from '@/types/types'
import { NextPage } from 'next'
import { IStaticProps } from '@/redux/types'
import { GetServerSideProps } from 'next'



const CardPage: NextPage<IStaticProps> = ({ id }) => {

  console.log(id)

  const router = useRouter();



  const [isLoading, setIsLoading] = React.useState<Boolean>(true)

  const [item, setItem] = React.useState<ICardPage | null>(null)

  const getMovie = async () => {
    const { data } = await axios.get(`http://www.omdbapi.com/?apikey=c83e38af&i=${id}`)
    setItem(data)
    setIsLoading(false)
  }

  React.useEffect(() => {
    getMovie()
  }, [])


  return (

    isLoading ? <Loader /> : item &&
      <>
        <div onClick={() => router.push('/')} className='mt-5 text-center font-bold transition-all hover:opacity-50 cursor-pointer'>
          ← Move Back
        </div>
        <div className='tablet:flex-col tablet:items-center relative m-auto max-w-[700px] mt-[100px] my-5 flex gap-10  justify-center items-start'>
          <div>
            <img src={item.Poster} alt="poster pic" />
          </div>
          <div className='tablet:items-center tablet:w-full tablet:py-[0px] tablet:px-[15px] flex flex-col items-start gap-2 w-1/3'>
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
          <div className='tablet:top-0 tablet:left-[50%] tablet:translate-x-[-50%]  absolute -left-5 bottom-1/4'>
            {item.Type === 'movie' ? <span></span> : <div className="p-2 border-gray-500 tablet:text-center border-2 rounded-md bg-white">This isn&apos;t a movie so why it&apos;s here?</div >}
          </div>
        </div>
      </>
  )
}



export default CardPage

export const getServerSideProps: GetServerSideProps = async (context) => {

  console.log(context.params)

  const imdbID = context.params?.imdbID

  return {
    props: {
      id: imdbID
    }
  };
}
