import React from 'react';
import { 
  Box, Container, Grid, Card, CardMedia, CardContent, IconButton, Button, Typography, Chip
} from '@mui/material';
import { Delete, Add, Remove } from '@mui/icons-material';
import VerifiedIcon from '@mui/icons-material/Verified';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, decreaseProduct, removeProduct } from '../reduxconfig/reducers/cartSlice'

const Cart = () => {
  const cart = useSelector(state => state.cart.cart); 
  const dispatch = useDispatch();

  const handleIncrease = (item) => {
    dispatch(addProduct(item)); // ➕ increase
  };

  const handleDecrease = (item) => {
    dispatch(decreaseProduct(item.id)); // ➖ decrease correctly
  };

  const handleRemove = (id) => {
    dispatch(removeProduct(id));
  };

  if (cart.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', mt: 10 }}>
        <Typography variant="h5">Your cart is empty!</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ bgcolor: '#f8f9fa', minHeight: '100vh', py: 5 }}>
      <Container>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} lg={8}>
            {cart.map((item) => (
              <Card key={item.id} sx={{
                  mb: 3, borderRadius: 3, overflow: 'hidden', transition: 'all 0.3s ease',
                  '&:hover': { boxShadow: '0 12px 35px rgba(0,0,0,0.12)', transform: 'translateY(-8px)' }
                }}>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}>
                  <CardMedia
                    component="img"
                    sx={{ width: { xs: '100%', sm: 220 }, height: { xs: 220, sm: 220 }, objectFit: 'cover' }}
                    image={item.thumbnail || item.image}
                    alt={item.title}
                  />
                  <CardContent sx={{ flex: 1, p: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: '#1a1a1a' }}>
                        {item.title}
                      </Typography>
                      <Chip 
                        label="In Stock" 
                        color="success" 
                        size="small" 
                        icon={<VerifiedIcon />}
                        sx={{ fontWeight: 600 }}
                      />
                    </Box>

                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6 }}>
                      {item.description?.substring(0, 70)}...
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                      <Typography variant="h4" color="primary" sx={{ fontWeight: 800 }}>
                        ${(item.price * item.quantity).toFixed(2)}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', border: '2px solid #e0e0e0', borderRadius: 3, overflow: 'hidden', bgcolor: 'white' }}>
                        <IconButton sx={{ color: '#1976d2', borderRadius: 0, px: 2, '&:hover': { bgcolor: '#e3f2fd' } }} onClick={() => handleDecrease(item)}>
                          <Remove />
                        </IconButton>
                        <Typography sx={{ px: 3, py: 1.2, fontWeight: 700, fontSize: '1.1rem', minWidth: 50, textAlign: 'center', bgcolor: '#f5f5f5' }}>
                          {item.quantity}
                        </Typography>
                        <IconButton sx={{ color: '#1976d2', borderRadius: 0, px: 2, '&:hover': { bgcolor: '#e3f2fd' } }} onClick={() => handleIncrease(item)}>
                          <Add />
                        </IconButton>
                      </Box>

                      <Button variant="outlined" color="error" startIcon={<Delete />} sx={{ borderRadius: 3, px: 3, fontWeight: 600, '&:hover': { bgcolor: 'error.main', color: 'white', borderColor: 'error.main' } }} onClick={() => handleRemove(item.id)}>
                        Remove
                      </Button>
                    </Box>
                  </CardContent>
                </Box>
              </Card>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Cart;
