import { createContext, useState } from "react";
import { products } from "../../assets/assets";
import { toast } from "react-toastify";
import {useNavigate} from 'react-router-dom'
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = '';
  const delivery_fee = 20000;
  const [search,setSearch] = useState('');
  const [showSearch,setShowSearch] = useState(false)
  const [cartItems,setCartItem] = useState({});
  const navigate = useNavigate();
const addToCart = async (itemId,size) =>{
  if (!size) {
    toast.error('Bạn Chưa Chọn Size');
    return;
  }
  let cartData = structuredClone(cartItems);
  if (cartData[itemId]) {
    if (cartData[itemId][size]) {
      cartData[itemId][size] +=1;
    }
    else{
      cartData[itemId][size]=1;
    }
  }
  else{
    cartData[itemId] ={};
    cartData[itemId][size]=1;
  }
  setCartItem(cartData);
}

  const getCartCount = ()=>{
    let totalCount = 0;
    for (const items in cartItems) {
      for(const item in cartItems[items]){
        try {
          if (cartItems[items][item] >0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {
          
        }
      }
      
    }
    return totalCount;
  }

  const updateQuantity = async (itemId,size,quantity)=>{
      let cartData = structuredClone(cartItems);
      cartData[itemId][size] = quantity;
      setCartItem(cartData);
  }

  const getCartAmount = () =>{
    let totalAmount = 0;
    for(const items in cartItems){
      let itemInfo = products.find((products)=> products._id === items);
      for(const item in cartItems[items]){
        try {
          if(cartItems[items][item] > 0){
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {
          
        }
      }
    }
    return totalAmount;
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };



  const value = {
    products,
    currency,
    delivery_fee,
    formatPrice,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
