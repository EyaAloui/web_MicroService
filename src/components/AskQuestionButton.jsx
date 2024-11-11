import React from 'react';
import { Box, Button } from '@mui/material';

const AskQuestionButton = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
      <Button variant="contained" color="primary" size="large">
        Ask Question
      </Button>
    </Box>
  );
};

export default AskQuestionButton;
