import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const AddPublication = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Publication:', { title, content });
    setTitle('');
    setContent('');
  };

  return (
    
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
    
      <TextField
        label="Content"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button type="submit" variant="contained" color="primary">
        Add Publication
      </Button>
    </Box>
  );
};

export default AddPublication;
