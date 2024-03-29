import Head from 'next/head'
import { Inter } from 'next/font/google'
import Main from '@/components/Main'
import Layout from '@/components/Layout'
import React from 'react'
import { Provider } from 'react-redux'
import {store, persistor} from '@/redux/store'
import { PersistGate } from 'redux-persist/integration/react'


export default function Home() {



  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>

      <Head>
        <title>Home Page</title>
        <meta name="keywords" content="NextJS, React, Redux, Redux Persist" />
        <meta name="description" content="This is my movie fetching test task" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Main />
      </Layout>
    </PersistGate> 
    </Provider>
  )
}
