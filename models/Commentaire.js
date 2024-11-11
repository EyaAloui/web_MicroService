const mongoose = require('mongoose');

const commentaireSchema = new mongoose.Schema({
  content: { type: String, required: true },

  publication: { type: mongoose.Schema.Types.ObjectId, ref: 'Publication', required: true },  // Référence à la publication
  createdAt: { type: Date, default: Date.now }
});

const Commentaire = mongoose.model('Commentaire', commentaireSchema);
module.exports = Commentaire;
