import React from 'react'
import styles from './Home.module.css'
import { FaHeart, FaRegHeart } from 'react-icons/fa6'
import { useState } from 'react'

import { BsCart3 } from "react-icons/bs";

function Products({item}) {
    const {id,title,category,price,images}=item;
const [count, setcount] = useState(1)
 const imgSrc = images && images.length > 0 ? images[0] : '';
    const inc=()=>{
        setcount((prev)=>prev+1)

    }
    const dec=()=>{
      
        setcount(prev=>prev >1 ? prev-1:1)

    }
  return (
    <div className={styles.products}>
    <div className={styles.img}>
        <img src={imgSrc} alt={title} />
  
    <button className={styles.likebtn}><FaHeart/></button>
        </div>

        <div className={styles.info}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.price}>{price} <span className={styles.oldprice}>$1000</span></p>
            <div className={styles.btns}>
             <div className={styles.counterGroup}>
                        <button  onClick={dec}className={styles.countBtn}>-</button>
                        <span className={styles.countNumber}>{count}</span>
                        <button onClick={inc} className={styles.countBtn}>+</button>
                    </div>
                      <button className={styles.addBtn}>
                        <BsCart3 />
                    </button>
            </div>
        </div>
    </div>
  )
}

export default Products
