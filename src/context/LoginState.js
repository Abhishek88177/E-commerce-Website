import { useContext, useEffect, useState } from "react"
import LoginContext from "./LoginContext";

export const LoginState= (props) =>{

    const [state , setState] = useState({
        email : "abc@gmail.com",
        password:""
    });

    const [authentication , setAuthentication] = useState(false);
    

    const [cartList , setCartList] = useState([]);

    const addToCart = (item) => {
        const existingItem = cartList.find(cartItem => cartItem.id === item.id);

        if (existingItem) {
            // If the item is already in the cart, increase its quantity
            setCartList(prevCartList => prevCartList.map(cartItem =>
                cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
            ));
        } else {
            // If the item is not in the cart, add it with quantity 1
            setCartList(prevCartList => [...prevCartList, { ...item, quantity: 1 }]);
        }
    };


    const loginAsUser = (userData) =>{
            setAuthentication(true)
            setState(userData)      
    }
    
    useEffect(() => {
        console.log(cartList);
        const retrievedCartList = JSON.parse(localStorage.getItem("cartListKey"));
        if (retrievedCartList) {
            setCartList(retrievedCartList);
        }    
      }, []);    

    return(
        <LoginContext.Provider value={{state , loginAsUser ,addToCart , cartList,setCartList,authentication}}>
            {props.children}
        </LoginContext.Provider>
    )
}

// export const useLoginContext = () => {   
//     const context = useContext(LoginContext);
//     if (!context) {
//       throw new Error('useLoginContext must be used within a LoginState');
//     }
//     return context;
//   };