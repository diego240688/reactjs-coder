import { useState } from 'react'

const ItemCount = ({stock = 0, initial = 1, onAdd})=> {
   const [quantity, setQuantity] = useState(initial)

   const increment = () => {
       if(quantity < stock) {
           setQuantity(prev => prev + 1)
       }
   }

   const decrement = () => {
       if(quantity > 1) {
           setQuantity(prev => prev - 1)
       }     
   }

   return(
    <div className='Counter'>          
    <div className='Controls d-flex justify-content-center align-items-center'>
        <button className="btn btn-primary" onClick={decrement}>-</button> 
        <h4 className='Number mx-3'>{quantity}</h4>
        <button className="btn btn-primary" onClick={increment}>+</button>
    </div>
    <div className="mt-3">
        <button className="btn btn-primary " onClick={() => onAdd(quantity)}>Agregar al carrito</button>
    </div>
</div>

   )

}
export default ItemCount;
