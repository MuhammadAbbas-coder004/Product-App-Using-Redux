import React, { useState, useEffect } from "react";
import { Box, Card, CardMedia, CardContent, Typography, CardActions, Button, CircularProgress } from "@mui/material";
import { useDispatch } from "react-redux";
import { addProduct } from "../reduxconfig/reducers/cartSlice";

function ProductCard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=6")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setError("Unable to load products. Please try again later.");
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addProduct(product));
    alert(`${product.title} added to cart!`);
  };

  if (loading)
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "50vh" }}>
        <CircularProgress />
      </Box>
    );

  if (error)
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "50vh" }}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Box>
    );

  return (
    <Box sx={{ py: 4, px: 2 }}>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3, justifyContent: "center" }}>
        {products.map((product) => (
          <Card
            key={product.id}
            sx={{
              width: { xs: "100%", sm: "30%", md: "30%" },
              display: "flex",
              flexDirection: "column",
              boxShadow: 3,
              "&:hover": {
                boxShadow: 6,
                transform: "translateY(-5px)",
                transition: "all 0.3s ease-in-out",
              },
            }}
          >
            <CardMedia
              component="img"
              image={product.thumbnail}
              alt={product.title}
              sx={{ height: 200, objectFit: "contain", p: 2 }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                {product.title.substring(0, 50)}...
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
                {product.description.substring(0, 70)}...
              </Typography>
              <Typography variant="h6" color="primary" sx={{ fontWeight: "bold" }}>
                ${product.price}
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "space-between", px: 2, pb: 2 }}>
              <Button size="small" variant="outlined" onClick={() => handleAddToCart(product)}>
                Add to Cart
              </Button>
              <Button size="small" variant="contained">
                View Details
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default ProductCard;