import React from 'react'
import { Link } from 'react-router-dom'
import Path  from '../../utils/path'; 
import styles from './NotFound.module.css'
//import { useEffect } from 'react';
export default function NotFound() {
 
 /*   useEffect(() => {
     const rootElement=document.getElementById('root')
    if(rootElement){
      rootElement.style.filter="blur(8px)"
    }
    const notFound=document.getElementsByClassName(`.${styles.Notcontainer}`)
    if(notFound){
      notFound.style.position='relative'
      notFound.style.zIndex='999'
    }
  document.body.style.backgroundColor='white'
  document.body.style.color='black'
  return ()=>{
     document.body.style.backgroundColor=''
  document.body.style.color=''
  }

  }, []) */
  
  return (
    <div className={styles.Notcontainer}>
      <div className={styles.insideC}>
      <h1 className={styles.text}> 404 Not found </h1>
      <p className={styles.p}> The page u are looking for does not exist</p>
<Link  className= {styles.Link} to={Path.Home}>Go back to home page </Link>
    </div>
    </div>
  )
}
