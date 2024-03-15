import { createContext, useContext, useReducer } from "react";

const initialState={
    selectedItems : [],
    total:0,
    itemsCounter :0,
    checkout:false
};
const sumproducts = (items)=>{
  const itemsCounter = items.reduce((acc,cur)=>acc + cur.quantity, 0);
  const total = items.reduce((acc,cur)=>acc + cur.quantity*cur.price, 0);
  return {itemsCounter,total}
}

const reducer = (state,action)=>{
   switch(action.type){
     case 'add_items' : 
     if(!state.selectedItems.find(item  => item.id ===action.payload.id ) )
     {
       state.selectedItems.push({...action.payload , quantity:1 });
     }
     
     return{
        selectedItems :[...state.selectedItems],
        checkout : false,
        ... sumproducts(state.selectedItems),
     };
     case 'remove_items' : 
     const newProducts = state.selectedItems.filter(item=> item.id !== action.payload.id);
     return{
        selectedItems :[...newProducts],
        checkout : false,
        ... sumproducts(newProducts),
     };
     case 'increase' :
     const increaseIndex = state.selectedItems.findIndex((item)=>item.id === action.payload.id);
     state.selectedItems[increaseIndex].quantity++;
     return{
       ...state,
       ...sumproducts(state.selectedItems)
     };
     case 'decrease' :
     const decreaseIndex = state.selectedItems.findIndex((item)=>item.id === action.payload.id);
     state.selectedItems[decreaseIndex].quantity--;
     return{
       ...state,
       ...sumproducts(state.selectedItems)
     }
     
   }
}

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer,initialState);
     return ( 
         <CartContext.Provider value={{state,dispatch}}>
             {children}
         </CartContext.Provider>
     );
    }
    const useCart = ()=>{
      const {state,dispatch} =  useContext(CartContext);
      return [state,dispatch];
    }
export default CartProvider;
export {useCart};