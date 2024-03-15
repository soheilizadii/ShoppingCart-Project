import { Link, useParams } from "react-router-dom";
import { useProduct } from "../context/ProductContext";
import { IoMdPricetag } from "react-icons/io";
import { SiOpenproject } from "react-icons/si";
import { FaArrowLeft } from "react-icons/fa";
import styles from './ProductDetailsPage.module.css';
import { RotatingLines } from 'react-loader-spinner';


const ProductDetailsPage  = () => {
    const {id} =useParams();
    const products = useProduct();
        const index = products.find(item=> item.id === +id);
        if (!index) {
            return  <RotatingLines />
        }
    return ( 
        <div className={styles.container}>
            <img src={index.image} />
            <div className={styles.information}>
                <h3 className={styles.title}>{index.title}</h3>
                <p className={styles.description}>{index.description}</p>
                <p className={styles.category}>
                    <SiOpenproject/>
                    <span>{index.category}</span>
                </p>
                <div className={styles.action}>
                    <span className={styles.price}>
                        <IoMdPricetag/>
                        <span>{index.price} $</span>
                    </span>
                    <div className={styles.link}>
                        <Link to='/products'>
                            <FaArrowLeft/>
                            <span>Back To Shop</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ProductDetailsPage ;