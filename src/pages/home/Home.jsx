import React from 'react'
import Products from './Products'
import styles from './Home.module.css'
import Categories from './Categories'
export default function Home({addToCart,categories,setCategory,category,showData}) {//so here we got the catefores and showdata and category and setcategory to give to the categories itself then we got the showdata and we mapped it like with it seoemt then we passed it to the product the iteam so that we can get its img and title so on 
  return (
    <div>  
    <Categories categories={categories} setCategory={setCategory}
    category={category}
    />
    <div className={styles.container}>
      
    {showData.length > 0 ? (
          showData.map((item) => (
          <Products key={item.id} item={item} addToCart={addToCart} />
          ))
        ) : (
          <p>No products found.</p>
        )}
    
    </div>
      
    </div>
  )
}
