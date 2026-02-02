import React from 'react';
import { Box, Typography } from '@mui/material';

export default function HomePage() {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Browse Home‑Cooked Meals
      </Typography>
      <Typography variant="body1">
        Explore a variety of dishes prepared by talented home chefs. Filter by cuisine, price, or dietary preferences, and place your order with ease.
      </Typography>
      <Typographyvariant="body2" color="text.secondary">
        Ready to tantalize your taste buds? Sign up as a buyer or showcase your culinary creations as a home cook.
      </Typography>
    </Box>
  );
}