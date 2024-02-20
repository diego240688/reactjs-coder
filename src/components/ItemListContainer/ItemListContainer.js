import {  useState,useEffect } from 'react';
// import {getProducts ,getProductsByGenre} from '../servicios/asyncMock'
import ItemList from '../ItemLsit/ItemLsit';
import { useParams } from 'react-router-dom';
import {getDocs, collection} from "firebase/firestore"
import { db } from '../servicios/firebaseconfig';
import { query, where } from 'firebase/firestore';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { generoid } = useParams()

    useEffect(() => {
        document.title = 'Todos los productos'
    }, [])

    useEffect(() => {
        setLoading(true)
        
        const collectionRef = generoid 
            ? query(collection(db, 'products'), where('genero', '==', generoid))
            : collection(db, 'products')

        getDocs(collectionRef).then(response => {
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data }
            })

            setProducts(productsAdapted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })

                
    }, [generoid])
    if(loading) {
        return <h1>Cargando productos...</h1>
    }

    return(
        <div>
            <h1>{greeting}</h1>
                <h2>{generoid ? `Estos son nuestros libros del género ${generoid}` : 'Estos son todos nuestros libros'}</h2>

                <ItemList products={products}/>
        </div>
    )   
} 
export default ItemListContainer;