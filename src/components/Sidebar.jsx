import React from 'react';
import { List, ListItem, ListItemText, Typography, Box } from '@mui/material';

const Sidebar = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>Forums</Typography>
      <List>
        <ListItem button><ListItemText primary="View all" /></ListItem>
        <ListItem button><ListItemText primary="General" /></ListItem>
        <ListItem button><ListItemText primary="Ideas" /></ListItem>
        <ListItem button><ListItemText primary="User Feedback" /></ListItem>
      </List>

      <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>Tags</Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {['Swagger', 'Docy', 'weCare', 'Business', 'Download', 'WordPress'].map((tag) => (
          <Typography
            key={tag}
            variant="body2"
            sx={{
              background: '#e0e0e0',
              padding: '4px 8px',
              borderRadius: '16px',
              fontSize: '12px'
            }}
          >
            {tag}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default Sidebar;
