const mongoose = require('mongoose');

const publicationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },

  forum: { type: mongoose.Schema.Types.ObjectId, ref: 'Forum', required: true },  // Référence au forum
  createdAt: { type: Date, default: Date.now }
});

const Publication = mongoose.model('Publication', publicationSchema);
module.exports = Publication;
