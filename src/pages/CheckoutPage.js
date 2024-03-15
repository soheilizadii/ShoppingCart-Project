import BasketCart from "../components/BasketCart";
import BasketSidebar from "../components/BasketSidebar";
import { useCart } from "../context/CartContext";

import styles from './Checkout.module.css';

const CheckoutPage = () => {
    const [state, dispatch] = useCart();
    const clickHandler = (type , payload)=>{
        dispatch({type , payload});
    }
    if(!state.itemsCounter)
    {
        return <p className={styles.emptyBasket}>The Basket Cart is Empty</p>
    }
    return ( 
        <div  className={styles.container}>
            <BasketSidebar state={state} />
            <div style={{width:'80%'}}>
                {state.selectedItems.map(item => {
                  return <BasketCart product={item} clickHandler={clickHandler}  />
                })}
            </div>
        </div>
     );
}
 
export default CheckoutPage;
