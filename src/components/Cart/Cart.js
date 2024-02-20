import { useContext } from "react"
import { CartContext } from "../Context/Cartcontext"
import CartList from "../CartList/CartList"


const Cart = () =>{
    const {cart}= useContext(CartContext) 
    return(
        <div>
            <h1>Estos son los libros que tiene tu  el carrito</h1>
            <CartList cart ={cart}/> 
        </div>
    )
} 
export default Cart ;