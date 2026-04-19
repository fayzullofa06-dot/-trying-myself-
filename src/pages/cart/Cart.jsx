import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import styles from './Cart.module.css'
import Item from './Item'

export default function Cart({cartData,removeCartdata}) {
  return (

   
    <div className={styles.cartContainer}>
    <h2 className={styles.titleCart}>Shopping cart</h2>
    <table className={styles.table}>
      <thead>
        <tr>
          <th>NO</th>
          <th>Img</th>
          <th>Title</th>
          <th>Price</th>
          <th>Count</th>
          <th>Subtotal</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
  {cartData.map((item,i)=>(
    <Item  key={item.id||i}item={item}
    index={i+1}removeCartdata={removeCartdata}
    
     />
  ))}
      </tbody>
    </table>
    

      
    </div>

  )
}
