import { useContext, useState} from "react";
import { CartContext } from "../context/CartContext";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Rating from '@mui/material/Rating';
import { ProductsData } from "../data/Data";
import { Footer } from '../components/Footer';
import '../styles/ProductPageStyle.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const ProductsPage = () => {
    const uniqueCategories = [...new Set(ProductsData.map(product => product.category))];

    const [hoveredImage, setHoveredImage] = useState(null);
    

    const { agregarCarrito, agregado } = useContext(CartContext);
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const filteredProducts = selectedCategory 
        ? ProductsData.filter(product => product.category === selectedCategory)
        : ProductsData;


    return (
        <>
            <div className="container container-product">
            <div>
                    <FormControl sx={{ m: 1, minWidth: 160 }} size="small">
                    <InputLabel id="demo-select-small-label">Categorias:</InputLabel>
                    <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={selectedCategory}
                        label="Filter by Category"
                        onChange={handleChange}
                    >
                        <MenuItem value="">Todo</MenuItem>
                        {uniqueCategories.map(category => (
                            <MenuItem key={category} value={category}>{category}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                </div>
                <Grid container spacing={2} justifyContent="center">
                    {filteredProducts.map((product, i) => (
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
            <div className="footer">
                <Footer />
            </div>
        </>
    );
}



