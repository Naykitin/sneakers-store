import React from 'react';
import styles from './Card.module.scss';

function Card({image, title, price, onPlus}) {

   const [isAdded, setIsAdded] = React.useState(false);

   const onClickAdd = () => {
      onPlus({image, title, price});
      setIsAdded(!isAdded);
   }

  return (
   <div className={styles.card}>
      <img width={18} height={18} className={styles.favorite} src="/img/unliked.png" alt="unliked"/>
      <img width={133} height={112} src={image} alt={title}/>
      <p>{title}</p>
      <div className={styles.cardInfo}>
      <div className={styles.cardPrice}>
         <span>Price:</span>
         <b>{price} uah.</b>
      </div>
      <img width={22} height={22} src={isAdded ? "/img/accept.png" : "/img/plus.svg" } alt="Plus" onClick={onClickAdd} />
      </div>
   </div>
  )
}

export default Card;