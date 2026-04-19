import React from "react";
import styles from "./Cart.module.css";

export default function Item({ item, index, removeCartdata }) {
  if (!item) return null;

  const { id, title, count, images, price, imgSrc } = item;

  const displayImage = images || imgSrc;
  const displayCount = count || 1;

  return (
    <tr>
      <td>{index}</td>

      <td>
        <img
          src={displayImage}
          alt={title}
          className={styles.productImg}
        />
      </td>

      <td>{title}</td>

      <td>${price}</td>

      <td>
        <div className={styles.countBox}>
          <button className={styles.countBtn}>-</button>
          <span>{displayCount}</span>
          <button className={styles.countBtn}>+</button>
        </div>
      </td>

      <td className={styles.subtotal}>
       {price*displayCount}$
      </td>

      <td>
        <button
          className={styles.deleteBtn}
          onClick={() => removeCartdata(id)}
        >
          delete
        </button>
      </td>
    </tr>
  );
}