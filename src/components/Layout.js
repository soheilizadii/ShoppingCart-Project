import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import styles from './Layout.module.css';
import { useCart } from "../context/CartContext";
 

const Layout = ({children}) => {
    const [state]=useCart();
    return ( 
        <>
            <header className={styles.header}>
               <Link to='/products'>BotoShop</Link>
               <div className={styles.cartIcon}>
                 <Link to='/checkout' >
                    <span>{state.itemsCounter}</span>
                    <PiShoppingCartSimpleBold/>
                 </Link>
               </div>
            </header>
              {children}
            <footer className={styles.footer}>
               <p>Developed By Soheil <span><FaHeart/></span></p>
            </footer>
        </>
     );
}
 
export default Layout;