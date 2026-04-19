import React from 'react'
import styles from './Home.module.css'

export default function Categories({categories,setCategory,category}) {
  return (//soo here we bring the catefory and aother 
    <div className={styles.Categories}>
<button onClick={()=>setCategory('all')}className={`${styles.catBtns}${category==='all'?styles.active:''}`}>All
  
</button>
{categories.map((cat,i)=>(
  <button key={i} className={` ${styles.catBtns}${category===cat?styles.active:''}`} onClick={()=>setCategory(cat)}>{cat}</button>))}

    </div>
  )
}
 