import React from 'react'
import styles  from './Header.module.css'
import { Link } from 'react-router-dom';
import  Path  from '../../utils/path';
//icons
import { FiHeart } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
export default function Header() {
  return (
    <header className={styles.header}>
      <Link to='/'>Logo</Link>
      <div className={styles.form}>
        <input type="search" placeholder='search By Name'/>
      </div>
      <div className={styles.links}>
        <Link to={Path.CART}><BsCart3/></Link>
        <Link to={Path.LIKED}><FiHeart/></Link>
      </div>
    </header>
  )
}
