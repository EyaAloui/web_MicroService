import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const Publication = ({ title, content }) => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2">{content}</Typography>
      </CardContent>
    </Card>
  );
};

export default Publication;
