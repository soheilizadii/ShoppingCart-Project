import { TbChecklist } from "react-icons/tb";
import { FaHashtag } from "react-icons/fa6";
import { BsPatchCheck } from "react-icons/bs";
import styles from './BasketSidebar.module.css';
const BasketSidebar = ({state}) => {
    return (  
        <div className={styles.container}>
            <p className={styles.items}>
                <TbChecklist/>
                <div>total:<span className={styles.title}>{state.total} $</span></div>
            </p>
            <p className={styles.items}>
               <FaHashtag/>
               <div>quantity:<span className={styles.title}>{state.itemsCounter} </span></div>
            </p>
            <p className={styles.items}>
               <BsPatchCheck/>
               <div>status :<span  className={styles.title}> pending</span></div>
            </p>
        </div>
    );
}
 
export default BasketSidebar;