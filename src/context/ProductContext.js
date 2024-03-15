import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/config";

const ProductContext = createContext();

const  ProductProvider =  ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await api.get('/products');
                setProducts(response); 
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    return  <ProductContext.Provider value={products}>{children}</ProductContext.Provider>;
    
};

export const useProduct = ()=>{
  const products =useContext(ProductContext);
  return products;
};

export default ProductProvider;
