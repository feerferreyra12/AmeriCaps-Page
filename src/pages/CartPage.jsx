import { useContext, useState } from "react"
import {CartContext} from "../context/CartContext";
import Button from '@mui/material/Button';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import axios from "axios";
import '../styles/CartPageStyle.css'


export const CartPage = () => {

    const [preferenceId, setPreferenceId] = useState(null)

    initMercadoPago('TEST-f264912a-f700-4b4c-8391-e1cc67b56319', {
      locale: "es-AR",
    });

    const createPreference = async (items) => {
      try {
          const response = await axios.post("http://localhost:3000/create_preference", {
              items: items,
          });
          const { id } = response.data;
          return id;
      } catch (error) {
          console.log(error);
      }
  };
  
  const handleBuy = async () => {
      const items = cartItems.map(item => ({
          title: item.name,
          quantity: item.amount,
          unit_price: item.price,
          currency_id: "ARS",
      }));
      const id = await createPreference(items);
      if (id) {
          setPreferenceId(id);
      }
  };
  


    const { cartItems, quitarCarrito, aumentarCantidad, disminuirCantidad } = useContext(CartContext)

    const total = parseInt(cartItems.reduce(
        (previous, current) => previous + current.amount * current.price,
        0)).toLocaleString('es-AR');


  return (
    <>
    <div className="container">
    {cartItems.length > 0 ? (
    <table className="table">
        <thead className="table-primary">
            <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Precio</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Eliminar</th>
            </tr>
        </thead>
        <tbody>
            {
                cartItems.map(item => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>
                            <button 
                            className="btn btn-ouline-primary" 
                            onClick={ () => disminuirCantidad(item.id)}
                            >-</button>
                            <Button variant="outlined" size="small">{item.amount}</Button>
                            <button 
                            className="btn btn-ouline-primary" 
                            onClick={ () => aumentarCantidad(item.id)}
                            >+</button>
                        </td>
                        <td>
                        <Button variant="outlined" size="medium" color="error" onClick={()=>quitarCarrito(item.id)}>
                        Eliminar
                        </Button>
                        </td>
                    </tr>
                ))
            }
            <tr>
            <th scope="row" className="table-primary"><b>TOTAL: </b></th>
            <td></td>
            <td></td>
            <td>${total}</td>
            </tr>
        </tbody>
    </table>
  ) : (
            <div>
                <p className="text-center cartVacio">El carrito está vacío 👀</p>
            </div>
        )}
    </div>

    <div className="row justify-content-center" >
    {cartItems.length > 0 && (
    <div className="col-2">
    <Button variant="outlined" size="large" disabled={cartItems<1} onClick={handleBuy}>Comprar</Button>
    {preferenceId && <Wallet initialization={{ preferenceId: preferenceId }} 
                customization={{ texts:{ valueProp: 'smart_option'}}} />}
    </div>
  )}
    </div>
</>
  )
}
