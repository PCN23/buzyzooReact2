import React from 'react';
import { Button } from '@mui/material';

export default function CustomButton({ onClick, children, coolColor }) {
  return (
    <Button onClick={onClick} variant="contained" sx={{ background: coolColor, margin: '10px' }}>{children}</Button>

  );
}


