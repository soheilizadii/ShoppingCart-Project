import { FaListUl } from "react-icons/fa6";
import styles from './Sidebar.module.css';
const Sidebar = ({query,setQuery}) => {

    const categoryHandler =(e)=>{
        const category = e.target.innerText.toLowerCase();
        if(category == '' || category=='all')
        {
           const {category , ...rest} = query;
           setQuery(rest);
        }
        else{
            setQuery({...query , category});
        }
   }

   const category =[
    {id:1, type:'All'},
    {id:1, type:'Electronics'},
    {id:1, type:'Jewelery'},
    {id:1, type:"Men's Clothing"},
    {id:1, type:"Women's Clothing"},
   ]

    return ( 
        <div className={styles.sidebar}>
                    <div className={styles.title}>
                        <FaListUl/>
                        <p>Categories</p> 
                    </div>
                    <ul onClick={(e)=>categoryHandler(e)}>
                        {category.map(item=>{
                           return  <li key={item.id}  className={item.type.toLowerCase() === query.category ? styles.selected : null}>{item.type}</li>
                        })}
                    </ul>
         </div>
     );
}
 
export default Sidebar;
