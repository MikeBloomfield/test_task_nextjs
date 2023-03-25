import React from 'react'
import { Provider } from 'react-redux'
import Head from 'next/head'
import Layout from '@/components/Layout'
import MainFavourites from '@/components/MainFavourites'
import { store, persistor } from '@/redux/store'
import { PersistGate } from 'redux-persist/integration/react'

const Favourites = () => {

    return (
        <>
            <Provider store={store}>
                <PersistGate persistor={persistor} loading={null}>
                    <Head>
                        <title>Favourites</title>
                        <link rel="icon" href="/favicon.ico" />
                        <meta name="keywords" content="NextJS, React, Redux, Redux Persist" />
                        <meta name="description" content="List of my favourite movies" />
                    </Head>
                    <Layout>
                        <MainFavourites />
                    </Layout>
                </PersistGate>
            </Provider>
        </>
    )
}

export default Favourites