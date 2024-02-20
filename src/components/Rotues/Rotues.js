import {  Routes, Route } from 'react-router-dom';
import ItemdetilContainer from '../ItemdetilContainer/ItemdetilContainer';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import Checkout from '../checkout/checkout';

import Cart from '../Cart/Cart';
const Rotues = ()=> {
    return (
        <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/genero/:generoid" element={<ItemListContainer />} />
                <Route path="/item/:productid" element={<ItemdetilContainer />} />
                <Route path="/cart" element={<Cart/>} />
                <Route path="/checkout" element={<Checkout />} />
                
                
        </Routes>

    )
}
export default Rotues