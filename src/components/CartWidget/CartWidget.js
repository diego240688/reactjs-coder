import { Link } from 'react-router-dom';

const CartWidget = ({quantity }) => {
    return (
        <Link to='/cart' className="CartWidget">
            <img src="carrito.png" alt='cart-widget' className='CartImg' width="45" height="45" />
            {quantity}
        </Link>
    );
}

export default CartWidget;