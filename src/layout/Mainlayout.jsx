import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import styles from './Mainlayout.module.css'
function Mainlayout() {
  return (
    <div className={styles.layout}>
    <Header/>
    <main className={styles.container}>
    <Outlet/>
    </main>
    <Footer/>
    </div>
  )
}

export default Mainlayout
