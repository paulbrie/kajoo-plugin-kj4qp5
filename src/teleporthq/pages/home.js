import React from 'react'

import { Helmet } from 'react-helmet'

import AppComponent from '../components/component'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>kajoo-plugin</title>
        <meta property="og:title" content="kajoo-plugin" />
      </Helmet>
      <div className={styles['container1']}>
        <h1>Hello</h1>
      </div>
      <AppComponent heading="Hello" text="Cool"></AppComponent>
    </div>
  )
}

export default Home
