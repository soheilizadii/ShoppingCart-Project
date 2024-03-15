import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { MdDeleteOutline } from "react-icons/md";
const Card = ({product}) => {
    
    const {id,title,image,price} = product ;
    
    const newTitle=title.split(' ').slice(0,3).join(' ');
    
    const [state,dispatch] = useCart();

    const clickHandler=(type)=>{
       dispatch({type ,payload:product});
    }
    
    const index = state.selectedItems.findIndex(item=>item.id === product.id );
    let quantity = 0; // Initialize quantity variable
    if(index !== -1) {
        quantity = state.selectedItems[index].quantity;
    }

    return ( 
        <div className={styles.container}>
             <img src={image}  />
             <h3>{newTitle}</h3>
             <p>{price} $</p>
             <div className={styles.action}>
                 <Link to={`/products/${id}`}>
                     <TbListDetails/>
                 </Link>
                 <div className={styles.buttonsContainer}>
                    {quantity == 1 && (  <button onClick={()=>clickHandler("remove_items")}>
                        <MdDeleteOutline/>
                    </button>)}
                    {quantity > 1 && ( <button onClick={()=>clickHandler("decrease")}>
                        -
                    </button>) }
                    {quantity >0 && <span>{quantity}</span>}
                    {quantity == 0 ?(<button onClick={()=>clickHandler("add_items")}>
                        <TbShoppingBagCheck/>
                    </button>) : ( <button onClick={()=>clickHandler("increase")}>
                        +
                    </button>)}
                 </div>
               
                
             </div>
        </div>
     );
}
 
export default Card;