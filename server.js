// Import dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Eureka } = require('eureka-js-client'); // Eureka Client for Service Registration

const app = express();
const PORT = process.env.PORT || 3000; // Set the port number

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/forumDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Models for Publication and Commentaire
const Publication = mongoose.model('Publication', new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
}));

const Commentaire = mongoose.model('Commentaire', new mongoose.Schema({
  content: { type: String, required: true },
  publication: { type: mongoose.Schema.Types.ObjectId, ref: 'Publication', required: true },
  createdAt: { type: Date, default: Date.now }
}));

// Eureka Client Configuration
const client = new Eureka({
  eureka: {
    host: 'localhost',
    port: 8761,
    servicePath: '/eureka/apps',
  },
  instance: {
    app: 'forum-service',
    hostName: 'localhost',
    ipAddr: '127.0.0.1',
    port: {
      $: PORT,  // Your service's port
      '@enabled': true,
    },
    vipAddress: 'forum-service',
    dataCenterInfo: {
      '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
      name: 'MyOwn',
    },
  },
});

// Start Eureka Registration
client.start((error) => {
  if (error) {
    console.error('Error registering with Eureka:', error);
  } else {
    console.log('Successfully registered with Eureka');
    // Start the Express server after Eureka registration
    app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`);
    });
  }
});

// Routes for API

// Get a publication by its ID
app.get('/publications/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const publication = await Publication.findById(id);
    if (!publication) {
      return res.status(404).json({ message: 'Publication not found' });
    }
    res.status(200).json(publication);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching publication' });
  }
});

// Create a new publication
app.post('/publications', async (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content are required' });
  }

  try {
    const publication = new Publication({ title, content });
    await publication.save();
    res.status(201).json(publication);
  } catch (error) {
    res.status(500).json({ message: 'Error adding publication' });
  }
});

// Update a publication by its ID
app.put('/publications/:id', async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content are required' });
  }

  try {
    const publication = await Publication.findByIdAndUpdate(id, { title, content }, { new: true });
    if (!publication) {
      return res.status(404).json({ message: 'Publication not found' });
    }
    res.status(200).json(publication);
  } catch (error) {
    res.status(500).json({ message: 'Error updating publication' });
  }
});

// Delete a publication by its ID
app.delete('/publications/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const publication = await Publication.findByIdAndDelete(id);
    if (!publication) {
      return res.status(404).json({ message: 'Publication not found' });
    }
    res.status(200).json({ message: 'Publication deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting publication' });
  }
});

// Get all comments for a publication
app.get('/publications/:id/commentaires', async (req, res) => {
  try {
    const commentaires = await Commentaire.find({ publication: req.params.id });
    res.status(200).json(commentaires);
  } catch (error) {
    res.status(500).send('Error fetching comments');
  }
});

// Add a comment to a publication
app.post('/publications/:id/commentaires', async (req, res) => {
  const { content } = req.body;
  if (!content) {
    return res.status(400).json({ message: 'Content is required' });
  }

  try {
    const commentaire = new Commentaire({ content, publication: req.params.id });
    await commentaire.save();
    res.status(201).json(commentaire);
  } catch (error) {
    res.status(500).send('Error adding comment');
  }
});

