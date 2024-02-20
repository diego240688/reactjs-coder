import React from 'react';
import './App.css';
import { BrowserRouter,} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { CartProvider } from './components/Context/Cartcontext';
import { NotificationProvider } from './components/servicios/NotificationContext.';
import Rotues from './components/Rotues/Rotues';


function App() {
  return (
    <div className="App">
      <NotificationProvider>
          <CartProvider>
            <BrowserRouter>
              <Navbar />
              < Rotues/> 
            </BrowserRouter>
          </CartProvider>
      </NotificationProvider>
      
      
    </div>
  );
}

export default App;
