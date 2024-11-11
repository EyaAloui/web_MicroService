import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import VisibilityIcon from '@mui/icons-material/Visibility';

const ForumList = () => {
  const forumItems = [
    { id: 1, title: 'One page template', author: 'John Doe', time: '26 minutes ago' },
    { id: 2, title: 'Support "IntelliSense" plugin', author: 'Jane Smith', time: '1 hour ago' },
    { id: 3, title: 'Creating progress bar', author: 'Alice Brown', time: '3 hours ago' },
  ];

  return (
    <Box>
      {forumItems.map(item => (
        <Card key={item.id} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">{item.title}</Typography>
            <Typography variant="body2" color="textSecondary">
              {item.author} · {item.time}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
              <ThumbUpAltIcon fontSize="small" sx={{ mr: 0.5 }} /> 5
              <VisibilityIcon fontSize="small" sx={{ ml: 2, mr: 0.5 }} /> 70
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default ForumList;
