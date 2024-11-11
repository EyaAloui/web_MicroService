import React from 'react';
import { Container, Grid } from '@mui/material';
import Sidebar from './components/Sidebar';
import ForumHeader from './components/ForumHeader';
import ForumList from './components/ForumList';

import AddPublication from './components/AddPublication';

import AskQuestionButton from './components/AskQuestionButton';

const App = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
  <ForumHeader/>
      <AddPublication />
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={6}>
          <ForumList />
        </Grid>
        <Grid item xs={3}>
          <AskQuestionButton />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
