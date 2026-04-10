import React from 'react'
import styles from './Home.module.css'

export default function Categories({categories,category,setCategories}) {
  return (//soo here we bring the catefory and aother 
    <div className={styles.Categories}>
<button className={category==='all'?styles.active:''}>All</button>
{categories.map((cat,i)=>{
    <button key={i} className={category===cat? styles.active:''} onClick={()=>setCategories(cat)}>{cat}</button> 
})}
so here we need the category for checking if it is all or what then we work on categories more importantly then we wriet like cat and i which means the category things in api we ogt then we wrie bttuon key then check if categor equalyd the cat if yes becomes active no become '' then in setcategores we are doing cat so basicallly i dint get to this part  so also we wrote the setcategories to change like cat so that when the cat changes it will also change so thats why we need them 
    </div>
  )
}
