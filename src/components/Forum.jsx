import React from 'react';
import { Container, Typography } from '@mui/material';
import PublicationList from './PublicationList';
import AddPublication from './AddPublication';

const Forum = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h3" gutterBottom>
        Forum
      </Typography>
      <AddPublication />
      <PublicationList />
    </Container>
  );
};

export default Forum;
