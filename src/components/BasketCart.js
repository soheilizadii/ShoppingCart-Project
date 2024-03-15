import { MdDeleteOutline } from "react-icons/md";
import styles from './basketCart.module.css';
const BasketCart = ({product,clickHandler }) => {
    const newTitle=product.title.split(' ').slice(0,3).join(' ');
    const quantity=product.quantity;
   
    return ( 
        <div key={product.id} className={styles.container}>
            <img src={product.image} />
            <p>{newTitle}</p>
            <div className={styles.action}>
                {quantity === 1 ? ( <button onClick={()=>clickHandler("remove_items" , product )}>
                    <MdDeleteOutline/>
                </button>) : ( <button  onClick={()=>clickHandler("decrease" , product )}>
                    -
                </button>) }
                 <span>{quantity}</span>
                <button  onClick={()=>clickHandler("increase" , product )}>
                    +
                </button>
            </div>
           
        </div>
     );
}
 
export default BasketCart;