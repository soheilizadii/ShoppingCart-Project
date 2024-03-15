import Card from '../components/Card';
import { ImSearch } from "react-icons/im";
import {useProduct} from '../context/ProductContext';
import styles from './ProuctsPage.module.css';
import { RotatingLines } from 'react-loader-spinner';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
const ProductsPage = () => {
    const products = useProduct();
    const [search,setSearch] =useState('');
    const [displayed,setDisplayed] = useState([]);
    const[query , setQuery] = useState({});
    const [params,setParams] = useSearchParams();
    const [error , setError] = useState(false);
    useEffect(()=>{
           setDisplayed(products);
           const query ={};
           const category = params.get('category') ;
           const searchparams = params.get('search') ;
           if (category) query.category=category ;
           if(searchparams) query.search=searchparams;
           console.log(query);
           setQuery(query);
           if(searchparams) setSearch(query.search);
    },[products ]);
    useEffect(()=>{
        
        setParams(query);

        let filteredProducts=products.filter((item) => item.title.toLowerCase().includes(search) );

        if (query.category && query.category !== 'All') {
            filteredProducts = filteredProducts.filter(item => item.category === query.category);
        }
        setDisplayed(filteredProducts);
    },[query]);
    const searchHandler =()=>{
        if(search == '' ){
          const {search , ...rest} = query ;
          
          setQuery(rest);
        }
        else{
            setQuery({...query , search});
        }
    }
    console.log(error);
    return ( 
        <>
            <div className={styles.search}>
                 <input type="text"  placeholder='search...' value={search} onChange={(e)=>setSearch(e.target.value) }   />
                 <button onClick={searchHandler} >
                    <ImSearch/>
                 </button>
            </div>
            <div className={styles.container}>
                <div className={styles.products}>
                {!products.length && <div className={styles.loading}> <RotatingLines /> </div>}
                {(!displayed.length && products.length ) ? <p className={styles.error}>There is no Products</p> : null}
                {}
                {displayed.map(product=><Card product={product}/>)}
                </div>
                <Sidebar query={query} setQuery={setQuery}/>
            </div>
            </>
     );
}
 
export default ProductsPage;