
import React from 'react';
import { useParams } from 'react-router-dom';
// import { getProductsByid } from '../servicios/asyncMock';
import { useState, useEffect } from 'react';
import Item from '../Item/Item'; 
import Itemdetil from '../Itemdetil/Itemdetil';
import './ItemdetilContainer.css';
import { db } from '../servicios/firebaseconfig'
import { getDoc, doc } from 'firebase/firestore'



const ItemdetilContainer = () => {
  const { productid } = useParams(); 
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const docRef = doc(db, 'products', productid)

        getDoc(docRef).then(doc => {
            const dataProduct = doc.data()
            const productAdapted = { id: doc.id, ...dataProduct }
            setProduct(productAdapted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    // getProductsByid(productid)
    //   .then((product) => {
      
    //     setProduct(product);
    //   })
    //   .catch((error) => {
        
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });
  }, [productid]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error al cargar el producto: {error.message}</p>;
  }

  return (
    <div>
      <h1>Detalle de libro</h1>
        <Itemdetil {...product}  />
    </div>
  );
};

export default ItemdetilContainer;
