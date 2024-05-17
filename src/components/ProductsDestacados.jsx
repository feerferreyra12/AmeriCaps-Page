import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Rating from '@mui/material/Rating';
import { ProductsData } from "../data/Data";
import '../styles/ProductPageStyle.css';

export const ProductsDestacados = () => {
    const { agregarCarrito, agregado } = useContext(CartContext);
    const firstThreeProducts = ProductsData.slice(0, 3)

    const [hoveredImage, setHoveredImage] = useState(null);

    return (
        <>
            <h2 className='title-productos'>Productos Destacados🔥</h2>
            <div className="productsContainer">
            <Grid container spacing={2} justifyContent="center">
                {firstThreeProducts.map((product, i) => (
                    <Grid item xs={12} sm={6} md={4} key={i}>
                        <Card sx={{ maxWidth: 350 }} className='card'>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    className={hoveredImage && hoveredImage === product.id ? 'card-media' : ''}
                                    src={hoveredImage === product.id ? product.hoverImg : product.img}
                                    alt={product.name}
                                    onMouseOver={() => setHoveredImage(product.id)}
                                    onMouseOut={() => setHoveredImage(null)}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" className='title'>
                                        {product.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        ${product.price}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <Rating name="size-medium" defaultValue={5} />
                            <CardActions>
                                <Button
                                    variant="outlined"
                                    startIcon={<AddShoppingCartIcon />}
                                    onClick={() => agregarCarrito(product)}
                                    disabled={agregado}
                                >
                                    {agregado ? "Añadiendo al Carrito" : "Agregar al Carrito"}
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            </div>
        </>
    );
}
