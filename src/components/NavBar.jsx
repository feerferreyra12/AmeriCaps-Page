import { NavLink, useNavigate } from "react-router-dom";
import { Badge } from "@mui/material"
import { ShoppingCart } from "@mui/icons-material"
import { Avatar } from '@mui/material';
import { CartContext } from "../context/CartContext";
import { useContext, useEffect, useState } from "react";
import { grey } from '@mui/material/colors'
import { ModalAlert } from './ModalAlert'
import '../styles/NavBarStyle.css'




export const NavBar = (  ) => {

    const [productsLength, setProductsLength] = useState(0);
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();
    const [showAlert, setShowAlert] = useState(false);


    useEffect(() => {
        setProductsLength(
            cartItems.reduce((previous, current) => previous + current.amount, 0)
        );
    }, [cartItems]);

    const handleCartClick = () => {
        if (productsLength === 0) {
          setShowAlert(true);
        } else {
          navigate('/carrito-de-compras');
        }
      };
    
      const handleCloseAlert = () => setShowAlert(false);



    return (
        <nav  className=" navbar navbar-expand-lg  bg-primary" data-bs-theme="dark">
            <div className="container-fluid">
                <NavLink to='/*' className="navbar-brand" href="#">
                    <img className="icon-nav" src="/src/assets/ameri-icon.webp" alt="ameri icono" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse paginaciones" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to='/' className="nav-link " aria-current="page" href="#">Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/productos' className="nav-link ">
                                Productos
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Nueva Temporada</a>
                        </li>
                    </ul>
                </div>
                <div className="d-flex align-items-center">
                <div>
                    
                </div>
                    <button onClick={handleCartClick} className="nav-link btn" style={{ backgroundColor: 'transparent', border: 'none', padding: 0 }}>
                        <Badge className="carrito-logo" badgeContent={productsLength} color="secondary">
                            <ShoppingCart sx={{ color: grey[50] }} />
                        </Badge>
                    </button>
                    <NavLink to='/login' className="nav-link">
                        <Avatar className="avatar-user" src="/broken-image.jpg" />
                    </NavLink>
                </div>
            </div>
            <ModalAlert show={showAlert} handleClose={handleCloseAlert} />
        </nav>
    )
}
