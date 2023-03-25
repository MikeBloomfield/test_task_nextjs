import React, { useEffect } from 'react'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import Layout from '@/components/Layout'
import { useRouter } from 'next/router'


const Error = () => {

    const router = useRouter();


    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 2000)
    }, [])


    return (
        <Provider store={store}>
            <Head>
                <title>404</title>
                <meta name="keywords" content="NextJS, React, Redux, Redux Persist" />
                <meta name="description" content="404 page" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <div className='text-center text-xl font-black'>
                    There is no such page {'>'}:0
                    <br />
                    <br />
                    You will be redirected in 2s
                </div>
            </Layout>
        </Provider>
    )
}

export default Error