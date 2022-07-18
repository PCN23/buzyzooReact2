import React from 'react';
import Button from '@material-ui/core/Button';


export default function CustomButton({ onClick, children }) {
  return (
    <Button onClick={onClick} variant="contained" color="secondary">
      {children}
    </Button>);
}
